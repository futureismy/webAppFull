import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { add_minutes, renderNameTheater } from "../../Helpers";
import {
  getScheduleTheaterSystemRequest,
  getTheaterSystemListRequest,
} from "../../Redux/Actions/theater.action";
import format from "date-format";
import { NavLink } from "react-router-dom";
import "./style.scss";

const MovieSchedule = (props) => {
  const listColor = [
    { maHeThongRap: "BHDStar", color: "#8bc541" },
    { maHeThongRap: "CGV", color: "red" },
    { maHeThongRap: "CineStar", color: "#df0d7a" },
    { maHeThongRap: "Galaxy", color: "#ff9800" },
    { maHeThongRap: "LotteCinima", color: "#ca4137" },
    { maHeThongRap: "MegaGS", color: "#9c9c9c" },
  ];

  const { theaterSchedule, theaterSystemList } = props;

  const [theaterID, setTheaterID] = useState({ maHeThongRap: "BHDStar" });
  const [color, setColor] = useState("#8bc541");

  useEffect(() => {
    props.dispatch(getScheduleTheaterSystemRequest());
  }, []);

  useEffect(() => {
    props.dispatch(getTheaterSystemListRequest(theaterID.maHeThongRap));
    const index = listColor.findIndex(
      (item) => item.maHeThongRap === theaterID.maHeThongRap
    );

    setColor(listColor[index].color);
  }, [theaterID]);

  const theaterList = theaterSchedule?.map((item) => {
    const maHeThongRap = item.maHeThongRap;
    const tenHeThongRap = item.tenHeThongRap;
    const logo = item.logo;
    return { maHeThongRap, tenHeThongRap, logo };
  });

  const [theaterChild, setTheaterChild] = useState({ maCumRap: null });

  useEffect(() => {
    if (theaterSystemList) {
      setTheaterChild({ maCumRap: theaterSystemList[0].maCumRap });
    }
  }, [theaterSystemList]);

  // lay danh sach phim
  const [showtime, setShowtime] = useState(null);

  useEffect(() => {
    // console.log(theaterSchedule);
    // tim vi tri cua he thong rap
    if (theaterSchedule) {
      const chooseTheaterSystem = theaterSchedule.filter(
        (item) => item.maHeThongRap === theaterID.maHeThongRap
      );

      const listCumRap = chooseTheaterSystem[0].lstCumRap;

      // tim vi tri cum rap duoc chon trong mang
      const index = listCumRap.findIndex(
        (item) => item.maCumRap === theaterChild.maCumRap
      );
      // console.log(index);
      // console.log(theaterChild.maCumRap);
      if (index !== -1) {
        setShowtime(listCumRap[index].danhSachPhim);
      } else {
        setShowtime(null);
      }
    }
  }, [theaterChild]);

  const renderMovieSchedule = () => {
    if (!showtime) {
      return (
        <div className="text-center pt-5" style={{ fontSize: "20px" }}>
          Không có suất chiếu nào
        </div>
      );
    } else {
      let renderContent = showtime.map((item, index) => {
        // lay ngay dau tien trong danh sach phim
        let date = item.lstLichChieuTheoPhim[0].ngayChieuGioChieu;
        let dateFormat = format("yyyy-MM-dd", new Date(date));

        //loc toan bo ngay dau tien
        let timeList = [];

        item.lstLichChieuTheoPhim.forEach((lichChieu, index) => {
          const formatNgayChieu = format(
            "yyyy-MM-dd",
            new Date(lichChieu.ngayChieuGioChieu)
          );
          const giochieu = add_minutes(
            new Date(lichChieu.ngayChieuGioChieu),
            120
          ).toString();
          // neu ngay chieu trung v ngay dau tien thi push vao mang moi
          if (formatNgayChieu === dateFormat) {
            const infoSchedule = {
              maLichChieu: lichChieu.maLichChieu,
              ngayChieuGioChieu: format(
                "hh:mm",
                new Date(lichChieu.ngayChieuGioChieu)
              ),
              gioChieu: format("hh:mm", new Date(giochieu)),
            };
            timeList.push(infoSchedule);
          }
        });

        // console.log(timeList);

        return (
          <div key={index} className="movie-schedule__movie">
            <div className="image">
              <img src={item.hinhAnh} alt="Đánh Cắp Giấc Mơ - Inception" />
            </div>
            <div className="content">
              <div className="title">
                <span className="btn-age">C16</span>
                {item.tenPhim}
              </div>
              <div className="desc">120 phút - TIX 0 - IMDb 8.8</div>
            </div>
            <div className="digital">2D Digital</div>
            <div className="movie-schedule__showtimes">
              {timeList.map((time, i) => {
                return (
                  <NavLink
                    to={`/checkout/${time.maLichChieu}`}
                    key={i}
                    className="btn-default"
                    href="#"
                    target="_blank"
                  >
                    <span> {time.ngayChieuGioChieu}</span> ~{time.gioChieu}
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      });

      return renderContent;
    }
  };

  // console.log(theaterSchedule);
  return (
    <div id="movie-schedule">
      <div className="container backgroundTop">
        <div className="row">
          <ul
            className="nav-tabs customscroll movie-schedule__tab col-12 col-sm-2"
            id="movie-schedule-tab"
            role="tablist"
          >
            {theaterList?.map((item, index) => {
              return (
                <li
                  key={item.maHeThongRap}
                  className="nav-item movie-schedule__tab__item"
                  onClick={() => {
                    setTheaterID({ maHeThongRap: item.maHeThongRap });
                  }}
                >
                  <a
                    className={`movie-schedule__tab__link nav-link ${
                      theaterID.maHeThongRap === item.maHeThongRap
                        ? "active"
                        : ""
                    }`}
                    id={`${item.maHeThongRap}-tab`}
                    data-toggle="tab"
                    href={`#${item.maHeThongRap}`}
                    role="tab"
                    aria-controls={item.maHeThongRap}
                  >
                    <img src={item.logo} alt={item.biDanh} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className="tab-content movie-schedule__tab__child col-12 col-sm-10"
            id="movie-schedule-tab-content"
          >
            <div className="row">
              <div
                className="tab-pane movie-schedule__child customscroll col-12 col-sm-2 fade active show"
                id={theaterID.maHeThongRap}
                role="tabpanel"
                aria-labelledby={`${theaterID.maHeThongRap}-tab`}
              >
                <ul
                  className="nav-tabs movie-schedule__child__tab"
                  id="movie-schedule-child-tab"
                  role="tablist"
                >
                  {theaterSystemList?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        id={item.maCumRap}
                        className="nav-item movie-schedule__child__item"
                        onClick={() => {
                          setTheaterChild({ maCumRap: item.maCumRap });
                        }}
                      >
                        <a
                          className={`movie-schedule__child__link nav-link ${
                            theaterChild.maCumRap === item.maCumRap
                              ? "active"
                              : ""
                          } `}
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                        >
                          <div className="image">
                            <img
                              src="./images/movie-schedule/cgv-general.jpg"
                              alt={item.maCumRap}
                            />
                          </div>
                          <div className="content">
                            <div
                              className={`title title__${theaterID.maHeThongRap}`}
                            >
                              {renderNameTheater(item.tenCumRap, color)}
                            </div>
                            <div className="desc">{item.diaChi}</div>
                            <input
                              className="btn-detail"
                              type="button"
                              defaultValue="[Chi tiết]"
                            />
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* danh sach phim */}
              <div
                className="tab-content movie-schedule__content customscroll col-12 col-sm-10"
                id="movie-schedule-content"
              >
                <div
                  className="tab-pane fade active show"
                  id="cgv-crescent-mall"
                  role="tabpanel"
                  aria-labelledby="cgv-crescent-mall-tab"
                >
                  {renderMovieSchedule()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theaterSchedule: state.theater.theaterSchedule,
    theaterSystemList: state.theater.theaterSystemList,
  };
};

export default connect(mapStateToProps)(MovieSchedule);
