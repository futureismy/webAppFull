import React from "react";
import "./style.scss";
var format = require("date-format");
export default function MovieDetailInformation(props) {
  const movieDetail = props.movieDetail;
  console.log(movieDetail);
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className="col-6 movie__detail_information_title">
              <p>Ngày công chiếu</p>
              <p>Đạo diễn</p>
              <p>Diễn viên</p>
              <p>Thể loại</p>
              <p>Định dạng</p>
              <p>Quốc gia sản xuất</p>
            </div>
            <div className="col-6 movie__detail_information_title">
              <p>
                <span>
                  {format("dd-MM-yyyy", new Date(movieDetail.ngayKhoiChieu))}
                </span>
              </p>
              <p>
                <span>Đức Mạnh</span>
              </p>
              <p>
                <span>Đức Mạnh</span>
              </p>
              <p>
                <span>Anime</span>
              </p>
              <p>
                <span>2D/Digital</span>
              </p>
              <p>
                <span>Nhật Bản</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 movie__detail_information_title">
          <p>Nội dung</p>
          <p>
            <span>{movieDetail?.moTa}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
