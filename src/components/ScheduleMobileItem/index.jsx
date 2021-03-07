import React from "react";
import format from "date-format";
import { useState } from "react";
import { add_minutes, renderNameTheater } from "../../Helpers";
import arrow from "../../assets/images/logos/next-session.png";
import "./style.scss";
import { NavLink } from "react-router-dom";

function ScheduleMobileItem(props) {
  const { lstCumRap, maHeThongRap, logo, tenHeThongRap } = props.theaterSystem;
  const listColor = [
    { maHeThongRap: "BHDStar", color: "#8bc541" },
    { maHeThongRap: "CGV", color: "red" },
    { maHeThongRap: "CineStar", color: "#df0d7a" },
    { maHeThongRap: "Galaxy", color: "#ff9800" },
    { maHeThongRap: "LotteCinima", color: "#ca4137" },
    { maHeThongRap: "MegaGS", color: "#9c9c9c" },
  ];

  const [toggle, setToggle] = useState(false);

  const setColor = listColor.filter(
    (color) => color.maHeThongRap === maHeThongRap
  )[0].color;

  const renderMovieSchedule = (showtimList) => {
    let renderContent = showtimList.map((item, index) => {
      // lay ngay dau tien trong danh sach phim
      let date = item.lstLichChieuTheoPhim[0].ngayChieuGioChieu;
      let dateFormat = format("yyyy-MM-dd", new Date(date));

      let timeList = [];

      item.lstLichChieuTheoPhim.forEach((lichChieu) => {
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
        <div key={index} className="schedule__mobile__movie">
          <div className="image">
            <img src={item.hinhAnh} alt="Đánh Cắp Giấc Mơ - Inception" />
          </div>
          <div className="content">
            <div className="title">
              <span className="btn-age">C16</span>
              {item.tenPhim}
            </div>
            <div className="desc">90 phút - TIX 0 - IMDb 8.8</div>
          </div>
          <div className="digital">2D Digital</div>
          <div className="schedule__mobile__showtimes">
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
  };

  return (
    <div className="col-12">
      <a
        className="schedule__mobile__wrapper"
        data-toggle="collapse"
        role="button"
        href={`#${maHeThongRap}`}
        onClick={() => setToggle(!toggle)}
      >
        <img src={logo} alt="logo" />
        <p className="schedule__mobile__title">
          {tenHeThongRap}
          {maHeThongRap === "BHDStar" ? (
            <span className="subscription">x3 vé BHD Star 59k/vé</span>
          ) : (
            ""
          )}
        </p>
        <img
          className={`arrow ${toggle ? "expand" : ""}`}
          src={arrow}
          alt="arrow"
        />
      </a>
      <div className="line"></div>
      <div id={maHeThongRap} className="collapse hide">
        <ul className="schedule__mobile__list">
          {lstCumRap.map((item, index) => {
            const { danhSachPhim, tenCumRap, diaChi } = item;
            // console.log(danhSachPhim);
            return (
              <li className="schedule__mobile__child" key={index}>
                <a className="schedule__mobile__link">
                  <div className="image">
                    <img
                      src={`./images/movie-schedule/${maHeThongRap}-mobile.jpg`}
                      alt="hinh-anh"
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      {renderNameTheater(tenCumRap, setColor)}
                    </div>
                    <div className="desc">{diaChi}</div>
                  </div>
                </a>
                <div className="schedule__mobile__showtime__wrapper">
                  {renderMovieSchedule(danhSachPhim)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ScheduleMobileItem;
