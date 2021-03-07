import React, { useState, useEffect } from "react";
import ListSeatCheckOut from "../ListSeatCheckout";
import { createAction } from "../../Redux/Actions/index";
import { CHOOSE_SEAT } from "../../Redux/Actions/type";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaSystemInformation } from "../../Redux/Actions/theater.action";

import "./SeatCheckout.scss";
import CheckoutCountDown from "../ChekoutCountDown";

const SeatCheckout = () => {
  const [setLoading] = useState(true);
  const dispatch = useDispatch();
  const { ngayChieu, tenCumRap, tenRap } = useSelector(
    (state) => state.booking.thongTinPhim
  );
  useEffect(() => {
    dispatch(
      getCinemaSystemInformation(() => {
        setLoading(false);
      })
    );
  }, []);
  const listSeat = useSelector((state) => state.booking.danhSachGhe);

  const active =
    "list__seat__item list__seat__item__active list__seat__item__cursor";
  const notVip = "list__seat__item  list__seat__item__cursor";
  const selected =
    "list__seat__item list__seat__item__selected list__seat__item__cursor";
  const vip = "list__seat__item list__seat__item__vip list__seat__item__cursor";

  const statusSeat = (booked, select, ticketType) => {
    if (booked) {
      // đã đặt
      return selected;
    }
    if (select) {
      // đã chon
      return active;
    } else {
      if (ticketType === "Thuong") {
        // vé thường
        return null;
      } else {
        // vé vip
        return vip;
      }
    }
  };

  const renderSeat = () => {
    return listSeat.map((ghe, index) => {
      return (
        <ListSeatCheckOut
          key={index}
          props={statusSeat(ghe.daDat, ghe.dangChon, ghe.loaiGhe)}
          tenGhe={ghe.tenGhe}
          onClick={() => {
            dispatch(createAction(CHOOSE_SEAT, ghe));
          }}
        />
      );
    });
  };

  return (
    <div className="SeatCheckout">
      <div className="SeatCheckout__topContent">
        <div className="SeatCheckout__topContent__leftTitle">
          <div className="logoCinema">
            <img
              className="logo"
              src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
              alt="logo"
            />
          </div>
          <div className="contentCinema">
            <p className="address">{tenCumRap}</p>
            <p className="hour">
              {ngayChieu} - {tenRap}
            </p>
          </div>
        </div>
        <div className="SeatCheckout__topContent__rightTitle">
          <p className="info1">Thời gian giữ ghế</p>
          <p className="info2">
            <span className="SeatCheckout__topContent__rightTitle__setTime">
              <CheckoutCountDown time={300000} />
            </span>
          </p>
        </div>
      </div>
      <div className="SeatCheckout__seatMap">
        <div className="SeatCheckout__seatMap__room">
          <div className="screen">
            <div className="namescreen">
              <img
                src="https://tix.vn/app/assets/img/icons/screen.png"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="listSeat mt-1 d-flex justify-align-content-between">
              <div className="d-inline-block listSeat__title">
                <h4>A</h4>
                <h4>B</h4>
                <h4>C</h4>
                <h4>D</h4>
                <h4>E</h4>
                <h4>F</h4>
                <h4>G</h4>
                <h4>H</h4>
                <h4>I</h4>
                <h4>J</h4>
                <h4>K</h4>
                <h4>L</h4>
                <h4>M</h4>
                <h4>N</h4>
              </div>
              <div className="listSeat__content">{renderSeat()}</div>
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <div className="listSeat__description d-flex justify-content-around">
              <div>
                <ListSeatCheckOut props={notVip} />
                <p>Ghế thường</p>
              </div>
              <div>
                <ListSeatCheckOut props={vip} />
                <p>Ghế vip</p>
              </div>
              <div>
                <ListSeatCheckOut props={active} />
                <p>Đang chọn</p>
              </div>
              <div>
                <ListSeatCheckOut props={selected} />
                <p>Ghế đã có người chọn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatCheckout;
