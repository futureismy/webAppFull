import React, { useState, useEffect } from "react";
import MovieDetailInformation from "../MovieDetailInformation";
import MovieDetailMainContentShowInfo from "../MovieDetailMainContentShowInfo";
import "./style.scss";
export default function MovieDetailMainContent(props) {
  const [show, setShow] = useState(true);
  const movieDetail = props.movieDetail;

  //useEffect là hàm chay sau khi giao diện render
  useEffect(() => {}, [show]);

  const showSection1 = () => {
    if (show === false) {
      setShow(!show);
    }
  };
  const showSection2 = () => {
    if (show === true) {
      setShow(!show);
    }
  };
  return (
    <div className="movie__detail__main__content">
      <div className="movie__detail__main__content__info ">
        <h3
          onClick={() => showSection1()}
          className={show ? "movie__detail__main__content__info__active" : ""}
        >
          Lịch Chiếu
        </h3>
        <h3
          onClick={() => showSection2()}
          className={!show ? "movie__detail__main__content__info__active" : ""}
        >
          Thông Tin
        </h3>
        {/* <h3>Đánh giá</h3> */}
      </div>
      <div className="movie__detail__main__content__showinfo">
        {show ? (
          <MovieDetailMainContentShowInfo />
        ) : (
          <MovieDetailInformation movieDetail={movieDetail} />
        )}
      </div>
    </div>
  );
}
