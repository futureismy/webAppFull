import React from "react";
import MovieDetailMainInfo from "../MovieDetailMainInfo";

import "./style.scss";

export default function MovieDetailMainTop(props) {
  const movieDetail = props.movieDetail;

  return (
    <div className="movie__detail__top">
      <img
        className="movie__detail__top__bg"
        src={movieDetail?.hinhAnh}
        alt={movieDetail?.biDanh}
      />
      <div className="movie__detail__top__blurred"></div>
      <div className="movie__detail__top__styleGradient"></div>
      <div className="movie__detail__top__info d-flex flex-row justify-content-center align-items-center">
        <MovieDetailMainInfo movieDetail={movieDetail} />
      </div>
    </div>
  );
}
