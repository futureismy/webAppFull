import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DetailCheckout from "../../components/Checkout/DetailCheckout";
import LeftCheckout from "../../components/Checkout/LeftCheckout";
import SeatCheckout from "../../components/Checkout/SeatCheckout";
import StepCheckout from "../../components/Checkout/StepCheckout";
import Loader from "../../components/Loader";
import "./style.scss";
import { useParams } from "react-router-dom";
import { getBookingRequest } from "../../Redux/Actions/booking.action";

const Checkout = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { maLichChieu } = useParams();

  // chỉ chạy 1 lần duy nhất khi commonent đc gọi
  useEffect(function () {
    //   dispastch action để tương tác vs api
    dispatch(
      getBookingRequest(
        maLichChieu,
        () => {
          setLoading(false);
        },
        () => {
          alert("Lỗi hệ thông!");
        }
      )
    );
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="Checkout">
          <div className="row">
            <div className="col-xl-9 pl-0">
              <div className="col-12 pl-0">
                <StepCheckout />
              </div>
              <div style={{minHeight:"calc(100vh - 80px)"}} className="row" >
                <div className="col-xl-1 pl-0">
                  <LeftCheckout />
                </div>
                <div className="col-xl-11 d-flex justify-content-center align-items-center">
                  <SeatCheckout />
                </div>
              </div>
            </div>
            <div className="col-xl-3 p-0">
              <DetailCheckout />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
