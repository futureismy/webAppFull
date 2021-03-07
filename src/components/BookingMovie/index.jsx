import React, { useEffect, useState } from "react";
import format from "date-format";
import moment from "moment";
import localization from "moment/locale/vi"; // set up vietnamese for day name
import Axios from "axios";
import { capitalizeWords, cutDateName, hiddenName } from "../../Helpers";
import "./style.scss";

const BookingMovie = () => {
  const [chooseMovie, setChooseMovie] = useState({
    id: null,
    name: "movie",
    lableTag: "Phim",
  });

  const [chooseTheater, setChooseTheater] = useState({
    id: null,
    name: "rap",
    lableTag: "Rạp",
    lichChieuPhim: [],
  });
  // console.log(chooseTheater.lichChieuPhim);

  const [theaterList, setTheaterList] = useState([]);

  // lay cum rap tu lich chieu
  useEffect(() => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1314"
    )
      .then((res) => {
        // console.log(res.data.heThongRapChieu);
        const systemTheater = res.data.heThongRapChieu;
        const arr = [];
        for (let i of systemTheater) {
          arr.push(...i.cumRapChieu);
        }
        // console.log(arr);
        setTheaterList(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [chooseDate, setChooseDate] = useState({
    id: null,
    date: "Ngày Chiếu",
    lableTag: null,
  });

  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    if (chooseTheater.id) {
      // console.log(moment.locale("vn"));
      // test ve Aeon taan phu ngafy 13/11
      let newDateList = [];
      let today = moment().subtract(32, "days");
      for (let i = 0; i < 7; i++) {
        let dateuse = moment(today).add(i, "days");
        newDateList.push({
          dateName: cutDateName(dateuse.calendar()),
          date: format("yyyy-MM-dd", new Date(dateuse)),
        });
      }
      // console.log(newDateList);
      setDateList(newDateList);
    }
  }, [chooseTheater]);

  const [movieScheduleList, setMovieScheduleList] = useState(null);
  useEffect(() => {
    const showtimelist = chooseTheater.lichChieuPhim;
    // console.log(chooseTheater.lichChieuPhim);
    // console.log(chooseDate.date);

    if (chooseDate.id) {
      const index = showtimelist.findIndex(
        (schedule) =>
          format("yyyy-MM-dd", new Date(schedule.ngayChieuGioChieu)) ===
          chooseDate.date
      );
      // console.log(index);
      if (index !== -1) {
        // loc lay gio chieu
        const showtime = showtimelist.filter(
          (showtime) =>
            format("yyyy-MM-dd", new Date(showtime.ngayChieuGioChieu)) ===
            chooseDate.date
        );
        console.log(showtime);
        const timeList = [];
        showtime.forEach((show) => {
          timeList.push(format("hh:mm", new Date(show.ngayChieuGioChieu)));
        });
        console.log(timeList);
        setMovieScheduleList(timeList);
      }
    }
  }, [dateList]);
  // console.log(dateList);
  // console.log(chooseTheater.lichChieuPhim);

  const [time, setTime] = useState({
    id: null,
    lableTag: "Suất chiếu",
  });

  const movieList = [
    {
      maPhim: 1314,
      tenPhim: "13 Reasons Why",
      biDanh: "13-reasons-why",
      trailer: "https://www.youtube.com/embed/1HpZevFifuo",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.PNG",
      moTa:
        "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-11-30T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1323,
      tenPhim: "What's wrong with secretary kim",
      biDanh: "what-s-wrong-with-secretary-kim",
      trailer: "https://www.youtube.com/embed/-ir2IflOHv4",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/what-s-wrong-with-secretary-kim_gp10.jpg",
      moTa:
        "What's Wrong with Secretary Kim? is a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, which was then serialized into a comic in 2015 via KakaoPage. The series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes. ",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-06-16T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1338,
      tenPhim: "Fight for my way",
      biDanh: "fight-for-my-way",
      trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
      moTa:
        "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-09-17T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1353,
      tenPhim: "Bloodshot",
      biDanh: "bloodshot",
      trailer: "https://www.youtube.com/embed/vOUVVDWdXbo",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
      moTa:
        "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce.",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-08-21T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1368,
      tenPhim: "Annabelle",
      biDanh: "annabelle",
      trailer: "https://www.youtube.com/embed/EMa-KFfatT0",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
      moTa:
        "là một bộ phim kinh dị siêu nhiên của Mỹ năm 2019 do Gary Dauberman đạo diễn, trong tác phẩm đầu tay của ông, từ kịch bản của Dauberman và một câu chuyện của Dauberman và James Wan , người cũng đóng vai trò là nhà sản xuất với Peter Safra",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-04-25T00:00:00",
      danhGia: 8,
    },
    {
      maPhim: 1383,
      tenPhim: "Avenger",
      biDanh: "avenger",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
      moTa:
        " The versions of the film shows in AMC Theaters as part of a Avengers Marvel Phase One marathon features an exclusive intro from Agent Coulson, talking about the film and the character. These Coulson intros were later includes as bonuses in the Avengers Phase One box set. ",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-07-21T00:00:00",
      danhGia: 10,
    },
  ];

  return (
    <div className="container">
      <div id="booking__movie">
        <div className="booking__movie">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="booking__movie__item booking__movie__name dropdown">
                <div
                  className=" selected dropdown-toggle"
                  data-toggle="dropdown"
                  data-flip="false"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {capitalizeWords(hiddenName(chooseMovie.lableTag, 50))}
                </div>
                <div className="dropdown-menu options-container customscroll">
                  {movieList.map((item) => {
                    return (
                      <div
                        className="option dropdown-item"
                        key={item.maPhim}
                        onClick={() =>
                          setChooseMovie({
                            id: item.maPhim,
                            lableTag: item.tenPhim,
                          })
                        }
                      >
                        <input
                          type="radio"
                          className="radio"
                          id={item.maPhim}
                          name="movie"
                        />
                        <label htmlFor={item.maPhim}>
                          {capitalizeWords(item.tenPhim)}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__theater dropdown">
                <div
                  className="selected dropdown-toggle"
                  data-toggle="dropdown"
                  data-flip="false"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {hiddenName(chooseTheater.lableTag, 16)}
                </div>
                {!chooseMovie.id ? (
                  <div className="dropdown-menu options-container small-container">
                    <div className="dropdown-item option">
                      <label>Vui lòng chọn phim</label>
                    </div>
                  </div>
                ) : (
                  <div className="dropdown-menu options-container customscroll">
                    {theaterList?.map((item) => {
                      return (
                        <div
                          className="option dropdown-item"
                          key={item.maCumRap}
                          onClick={() =>
                            setChooseTheater({
                              id: item.maCumRap,
                              lableTag: item.tenCumRap,
                              lichChieuPhim: item.lichChieuPhim,
                            })
                          }
                        >
                          <input
                            type="radio"
                            className="radio"
                            id={item.maCumRap}
                            name="cumrap"
                          />
                          <label htmlFor={item.maCumRap}>
                            {item.tenCumRap}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__datepick dropdown">
                <div
                  className="selected dropdown-toggle"
                  data-toggle="dropdown"
                  data-flip="false"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {chooseDate.date}
                </div>
                {!chooseTheater.id ? (
                  <div className="dropdown-menu options-container small-container">
                    <div className="dropdown-item option">
                      <label>Vui lòng chọn phim và rạp</label>
                    </div>
                  </div>
                ) : (
                  <div className="dropdown-menu options-container customscroll">
                    {dateList.map((date, index) => {
                      return (
                        <div
                          className="option dropdown-item"
                          key={index}
                          onClick={() => {
                            setChooseDate({
                              id: index + 1,
                              date: date.date,
                              lableTag: date.dateName,
                            });
                          }}
                        >
                          <input
                            type="radio"
                            className="radio"
                            id={index + 1}
                            name="date"
                          />
                          <label htmlFor={index + 1}>
                            <span className="dayName">{date.dateName}</span>
                            <br />
                            {date.date}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__showtimes dropdown">
                <div
                  className="selected dropdown-toggle"
                  data-toggle="dropdown"
                  data-flip="false"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {time.lableTag}
                </div>

                {!chooseDate.id ? (
                  <div className="dropdown-menu options-container small-container">
                    <div className="dropdown-item option">
                      <label>Vui lòng chọn phim, rạp và ngày xem </label>
                    </div>
                  </div>
                ) : !movieScheduleList ? (
                  <div className="dropdown-menu options-container small-container">
                    <div className="dropdown-item option">
                      <label>Không có suất chiếu</label>
                    </div>
                  </div>
                ) : (
                  <div className="dropdown-menu options-container customscroll">
                    {movieScheduleList.map((showtime, index) => {
                      console.log(showtime);
                      return (
                        <div
                          className="option dropdown-item"
                          key={index}
                          onClick={() => {
                            setTime({
                              id: index + 1,
                              lableTag: showtime,
                            });
                          }}
                        >
                          <input
                            type="radio"
                            className="radio"
                            id={index + 1}
                            name="time"
                          />
                          <label htmlFor={index + 1}>10:30</label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__book dropdown">
                <input
                  className={`btn-default ${time.id ? "active" : ""}`}
                  type="button"
                  defaultValue="Mua vé ngay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingMovie;
