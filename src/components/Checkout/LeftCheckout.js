import React from "react";
import "./LeftCheckout.scss";
import { useSelector } from "react-redux";

const LeftCheckout = () => {
  const { hinhAnh } = useSelector((state) => state.booking.thongTinPhim);
  console.log(hinhAnh);
  return (
    <div
      className="LeftCheckout"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(" + hinhAnh + ")",
      
      }}
    >
      <div className="LeftCheckout__modalleft"></div>
    </div>
  );
};

export default LeftCheckout;
