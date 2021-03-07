import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import "./style.scss";

export default function ListSeatCheckOut(props) {
  const activeClass = props.props;
  const tenGhe = props.tenGhe;
  const danhSachGhe = useSelector((state) => state.booking.gheDangDat);
  const [quantitySeat, setQuantitySeat] = useState(null);

  useEffect(() => {
    setQuantitySeat(danhSachGhe.length);
  }, [danhSachGhe]);

  const disableButton = (key) => {
    if (
      key ===
      "list__seat__item list__seat__item__selected list__seat__item__cursor"
    ) {
      return true;
    }
  };
  return (
    <div className="list__seat">
      {/* <div className="list__seat__item list__seat__item__vip list__seat__item__selected list__seat__item__active"> */}
      <div className={activeClass || "list__seat__item"}>
        <button
          className="list__seat__item__btn"
          disabled={disableButton(activeClass)}
          onClick={props.onClick}
        >
          <span className="list__seat__item__btn__tittle ">
            {tenGhe || quantitySeat}
          </span>
        </button>
      </div>
    </div>
  );
}
