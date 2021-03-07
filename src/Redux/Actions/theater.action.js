import { createAction } from ".";
import Axios from "axios";
import { theaterService } from "../../Service";
import {
  GET_SCHEDULE_THEATER_SYSTEM_FAILED,
  GET_SCHEDULE_THEATER_SYSTEM_SUCCESS,
  GET_THEATER_SYSTEM_LIST_FAILED,
  GET_THEATER_SYSTEM_LIST_SUCCESS,
  GET_CINEMA_SYSTEM_INFOMATION_SUCCESS,
} from "./type";

export const getScheduleTheaterSystemRequest = () => {
  return (dispatch) => {
    const theaterScheduleRequest = theaterService.getScheduleTheaterSystem();
    const theaterSystemListRequest = theaterService.getTheaterSystemList(
      "BHDStar"
    );
    Axios.all([theaterScheduleRequest, theaterSystemListRequest])
      .then(
        Axios.spread((...res) => {
          const res_1 = res[0].data;
          const res_2 = res[1].data;
          // console.log(res_1);
          // console.log(res_2);
          dispatch(createAction(GET_SCHEDULE_THEATER_SYSTEM_SUCCESS, res_1));
          dispatch(createAction(GET_THEATER_SYSTEM_LIST_SUCCESS, res_2));
          // callback()
        })
      )
      .catch(
        Axios.spread((...err) => {
          console.log(err[0]);
          console.log(err[0]);
          dispatch(createAction(GET_SCHEDULE_THEATER_SYSTEM_FAILED, err[0]));
          dispatch(createAction(GET_THEATER_SYSTEM_LIST_FAILED, err[0]));
        })
      );
  };
};

export const getTheaterSystemListRequest = (id, callback) => {
  return (dispatch) => {
    theaterService
      .getTheaterSystemList(id)
      .then((res) => {
        // console.log(res.data);
        dispatch(createAction(GET_THEATER_SYSTEM_LIST_SUCCESS, res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(GET_THEATER_SYSTEM_LIST_FAILED, err));
      });
  };
};

export const getCinemaSystemInformation = (callback) => {
  return (dispatch) => {
    theaterService
      .getCinemaSystemInformation()
      .then((res) => {
        // console.log(res.data);
        dispatch(createAction(GET_CINEMA_SYSTEM_INFOMATION_SUCCESS, res.data));
        callback();
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(GET_SCHEDULE_THEATER_SYSTEM_FAILED, err));
      });
  };
};
