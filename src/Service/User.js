import Axios from "axios";
import * as yup from "yup";

// schema do minh tao ra de validation du lieu thu duoc tu form
export const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Trường này bắt buộc nhập"),
  matKhau: yup.string().required("*Trường này bắt buộc nhập"),
  hoTen: yup.string().required("*Trường này bắt buộc nhập"),
  email: yup
    .string()
    .required("*Trường này bắt buộc nhập")
    .email("*Email không hợp lệ"),
  soDt: yup
    .string()
    .required("*Trường này bắt buộc nhập")
    .matches(/^[0-9]+$/), //viet bieu thuc chinh quy phai viet lien, khong co dau cach giua cac ky tu
  maNhom: yup.string().required("*Trường này bắt buộc nhập"),
});

class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }

  logIn(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data,
    });
  }
  // infomationUser(data) {
  //   return Axios({
  //     method: "POST",
  //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
  //     data,
  //   });

  // }
}

export default UserService;
