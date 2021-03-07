import { createAction } from ".";
import { userService } from "../../Service";
import setHeaders from "../../utils/setHeaders";
import Axios from "axios";
import swal from "sweetalert";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_CLEAR_DATA,
  USER_LOGIN_FAILED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
  USER_INFOMATION_USER_SUCCESS,
  USER_INFOMATION_USER_FAILED,
  REDIRECT_CLEAR_ERROR,
} from "./type";

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(createAction(USER_LOGIN_REQUEST, null));
    userService
      .logIn(user)
      .then((res) => {
        dispatch(createAction(USER_LOGIN_SUCCESS, res.data));
        if (res.data.maLoaiNguoiDung) {
          //set header token
          setHeaders(res.data.accessToken);

          // lưu trạng thai login
          localStorage.setItem("User", JSON.stringify(res.data));
          // redirect qua home
          history.replace("/home");
        } else {
          return Promise.reject({
            response: { data: "Bạn chưa đăng ký!" },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Đăng nhập thất bại",
          text: `${err.response.data}`,
          icon: "warning",
        });
        dispatch(createAction(USER_LOGIN_FAILED, err));
      });
  };
};

export const actLogout = (history) => {
  localStorage.removeItem("User");
  localStorage.removeItem("exp");
  // chuyen huong ve trang home
  history.push("/home");
  return { type: USER_CLEAR_DATA };
};

export const actTryLogin = (history) => {
  return (dispatch) => {
    if (!localStorage.getItem("User")) {
      return;
    }

    // dispatch(createAction(USER_LOGIN_REQUEST, null));
    const user = JSON.parse(localStorage.getItem("User"));
    setHeaders(user.accessToken);
    dispatch(createAction(USER_LOGIN_SUCCESS, user));
  };
};

//Signup
export const actSignUpApi = (user, history) => {
  return (dispatch) => {
    dispatch(createAction(USER_SIGNUP_REQUEST, null));

    userService
      .signUp(user)
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(USER_SIGNUP_SUCCESS, res.data));

        swal({
          title: "Đăng ký thành công!",
          icon: "success",
        });
        // redirect qua login
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Đăng ký thất bại!",
          text: `${err.response.data}`,
          icon: "warning",
        });
        dispatch(createAction(USER_SIGNUP_FAILED, err));
      });
  };
};

export const getInfomationUser = (taiKhoan, callback, callbackError) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: { taiKhoan: taiKhoan },
    })
      .then((res) => {
        // console.log(res.data);
        dispatch(createAction(USER_INFOMATION_USER_SUCCESS, res.data));
        callback();
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(USER_INFOMATION_USER_FAILED, err));
        callbackError();
      });
  };
};

// update Infomation
export function updateInfomatinonUser(data) {
  return async function (dispatch) {
    try {
      // get local
      const user = JSON.parse(localStorage.getItem("User"));

      // call api
      const res = await Axios({
        method: "PUT",
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: data,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        alert("Cập nhập thông tin thành công !");
      }
      // success
    } catch (error) {
      console.log(error);
    }
  };
}

export const actRedirect = () => {
  return (dispatch) => {
    dispatch(createAction(REDIRECT_CLEAR_ERROR, null));
  };
};
