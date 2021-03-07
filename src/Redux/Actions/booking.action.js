import { createAction } from "./index";
// import moduleName from '../../Service/booking'
import Axios from "axios";
import { GET_BOOKING_SUCCESS, GET_BOOKING_FAILED } from "./type";
import {} from "react-router-dom";
import swal from "sweetalert";
export function getBookingRequest(maLichChieu, callBack, errorCallback) {
  //hàm chiệu trách nhiệm xữ lý bất đồng bộ
  return async (dispatch) => {
    //call api
    try {
      //   await là đợi các tác vụ bất đồng bộ thực hiên xong
      const res = await Axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );

      // success
      if (res.status === 200 || res.status === 201) {
        //dispatch lên reducer
        dispatch(createAction(GET_BOOKING_SUCCESS, res.data));
        callBack();
      }
    } catch (error) {
      //failed
      console.log(error);
      //dispatch lên reducer

      dispatch(createAction(GET_BOOKING_FAILED, error));
      errorCallback();
    }
  };
}

// đăt vế
export function postBookingRequest(maLichChieu, danhSachVe, history) {
  return async function (dispatch) {
    try {
      // get local
      const user = JSON.parse(localStorage.getItem("User"));
      // call api
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },

        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        swal({
          title: "Đặt vé thành công!",
          icon: "success",
        }).then(() => {
          history.push("/user/lichsudatve");
        });
      }
      // success
    } catch (error) {
      swal({
        title: "Đặt vé thất bại!",
        icon: "warning",
      }).then(() => {
        history.push("/home");
      });
    }
  };
}
