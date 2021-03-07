import React from "react";
import "./style.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateInfomatinonUser } from "../../Redux/Actions/user.action";
import "./style.scss";
export default function ChangeThePasswordUser() {
  const { maLoaiNguoiDung } = useSelector((state) => state?.user?.data) || "";
  const { hoTen, taiKhoan, soDT, email, maNhom, matKhau } =
    useSelector((state) => state?.user?.infomationUser) || "";
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      matKhauCu: "",
      matKhauMoi: "",
      nhapLaiMatKhauMoi: "",
    },
    onSubmit: (values) => {
      const matKhauMois = values.matKhauMoi;
      const updatePassword = {
        hoTen,
        taiKhoan,
        soDT,
        email,
        maNhom,
        maLoaiNguoiDung,
        matKhau: matKhauMois,
      };
      console.log(updatePassword);
      dispatch(updateInfomatinonUser(updatePassword));
    },
    validate: (values) => {
      let errors = {};

      if (!values.matKhauCu) {
        errors.matKhauCu = "Bạn chưa nhập mật khẩu cũ";
      } else if (values.matKhauCu !== matKhau) {
        errors.matKhauCu = "Mật khẩu không chính sác !";
      }

      if (!values.matKhauMoi) {
        errors.matKhauMoi = "Bạn chưa nhập mật khẩu mới";
      } else if (values.matKhauMoi.length < 5) {
        errors.matKhauMoi = "Độ dài mật khẩu mới phải nhiều hơn 5 kí tự";
      }

      if (!values.nhapLaiMatKhauMoi) {
        errors.nhapLaiMatKhauMoi = "Bạn chưa nhập lại mật khẩu mới";
      } else if (values.nhapLaiMatKhauMoi !== values.matKhauMoi) {
        errors.nhapLaiMatKhauMoi = "Nhập lại không chính sác !";
      }

      return errors;
    },
  });

  // console.log(formik.errors);

  return (
    <div className="change__password">
      <div className="change__password__form">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="change__password__form__title text-center">
            Thay đổi mật khẩu
          </h1>
          <div className="form-group">
            <label htmlFor="matkhaucu">Mật khẩu cũ:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu cũ"
              name="matKhauCu"
              onChange={formik.handleChange}
              value={formik.values.matKhauCu}
            />
            {formik.errors.matKhauCu ? (
              <div className="alert-danger mt-1 text-center">
                {formik.errors.matKhauCu}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mật khẩu mới:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu mới"
              name="matKhauMoi"
              onChange={formik.handleChange}
              value={formik.values.matKhauMoi}
            />
            {formik.errors.matKhauMoi ? (
              <div className="alert-danger mt-1 text-center">
                {formik.errors.matKhauMoi}
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mật khẩu mới:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu mới"
              name="nhapLaiMatKhauMoi"
              onChange={formik.handleChange}
              value={formik.values.nhapLaiMatKhauMoi}
            />
            {formik.errors.nhapLaiMatKhauMoi ? (
              <div className="alert-danger mt-1 text-center">
                {formik.errors.nhapLaiMatKhauMoi}
              </div>
            ) : null}
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn ">
              Thay đổi mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
