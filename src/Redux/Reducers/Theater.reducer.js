import {
  GET_SCHEDULE_THEATER_SYSTEM_SUCCESS,
  GET_THEATER_SYSTEM_LIST_SUCCESS,
  GET_CINEMA_SYSTEM_INFOMATION_SUCCESS
} from "../Actions/type";
let initialState = {
  theaterSchedule: null,
  theaterSystemList: null,
  listHeThongRap:null
};

const TheaterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SCHEDULE_THEATER_SYSTEM_SUCCESS: {
      return { ...state, theaterSchedule: payload };
    }
    case GET_THEATER_SYSTEM_LIST_SUCCESS: {
      return { ...state, theaterSystemList: payload };
    }
    case GET_CINEMA_SYSTEM_INFOMATION_SUCCESS: {
      return { ...state, listHeThongRap: payload };
    }

    default:
      return { ...state };
  }
};

export default TheaterReducer;
