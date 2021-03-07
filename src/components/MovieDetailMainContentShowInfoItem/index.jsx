import React, { useEffect, useState } from "react";
import cgvHungVuong from "../../assets/images/logos/cgv-hung-vuong-plaza-15380175133678.jpg";
import format from "date-format";
import { Link } from "react-router-dom";
import { add_minutes, renderNameTheater } from "../../Helpers";
import "./style.scss";

export default function MovieDetailMainContentShowInfoItem(props) {
  const { tenCumRap, diaChi } = props.item;
  const thongTinRap = props.time;
  const maRap = props.maRap;
  const color = props.color;
  const gioRap = thongTinRap?.filter(function (obj) {
    return maRap.indexOf(obj.maRap) !== -1;
  });

  // console.log(gioRap);
  const [show, setShow] = useState(true);
  const showTimeMovie = () => {
    setShow(!show);
  };

  const renderGioChieu = () => {
    return gioRap.map((item, index) => {
      return (
        <Link
          to={`/checkout/${item.maLichChieu}`}
          key={index}
          className="mt-1"
          target="_blank"
        >
          <span>{format("hh:mm", new Date(item.ngayChieuGioChieu))}</span> ~{" "}
          {format(
            "hh:mm",
            new Date(
              add_minutes(
                new Date(item.ngayChieuGioChieu),
                item.thoiLuong
              ).toString()
            )
          )}
        </Link>
      );
    });
  };
  return (
    <div className="show__item__item ">
      <div
        onClick={() => showTimeMovie()}
        className="show__item__item__media my-3"
      >
        <div className="show__item__item__media__img">
          <img src={cgvHungVuong} alt="rap" />
        </div>

        <div className="show__item__item__media__content">
          <span>{renderNameTheater(tenCumRap, color)} </span>

          <p>{diaChi}</p>
        </div>
      </div>
      {show ? (
        <div className="show__item__item__type__time">
          <div className="d-flex justify-content-between">
            <h3>2D Digital</h3>
          </div>
          {renderGioChieu()}
        </div>
      ) : null}
    </div>
  );
}
