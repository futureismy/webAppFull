import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScheduleTheaterSystemRequest } from "../../Redux/Actions/theater.action";
import Footer from "../Footer";
import ScheduleMobileItem from "../ScheduleMobileItem";
import "./style.scss";

const MovieScheduleMobile = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScheduleTheaterSystemRequest());
  }, []);

  const theaterList = useSelector((state) => state.theater.theaterSchedule);
  // console.log(theaterList);

  return (
    <>
      <section className="schedule__mobile mt-3 mb-5">
        <div className="container-fluid">
          <div className="row">
            {theaterList?.map((theaterSystem, index) => {
              return (
                <ScheduleMobileItem theaterSystem={theaterSystem} key={index} />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MovieScheduleMobile;
