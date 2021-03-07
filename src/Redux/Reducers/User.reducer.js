import {
  USER_CLEAR_DATA,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_INFOMATION_USER_SUCCESS,
  REDIRECT_CLEAR_ERROR,
} from "../Actions/type";

let initialState = {
  loading: false,
  data: null,
  err: null,
  errSignUp: null,
  dataSignUp: null,
  infomationUser: null,
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, data: payload, err: null };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, data: null, err: payload };
    case USER_CLEAR_DATA:
      return {
        ...state,
        loading: false,
        data: null,
        err: null,
        errSignUp: null,
        dataSignUp: null,
      };
    case REDIRECT_CLEAR_ERROR:
      return { ...state, err: null, errSignUp: null };
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, dataSignUp: payload, err: null };
    case USER_SIGNUP_FAILED:
      // console.log(payload);
      return { ...state, loading: false, dataSignUp: null, errSignUp: payload };
    case USER_INFOMATION_USER_SUCCESS:
      return { ...state, infomationUser: payload };
    default:
      return { ...state };
  }
};

export default UserReducer;
