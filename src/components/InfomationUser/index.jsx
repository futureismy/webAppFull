import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfomatinonUser } from "../../Redux/Actions/user.action";
import "./style.scss";
import { useFormik } from "formik";

export default function InfomationUser() {
  const dispatch = useDispatch();

  const { maLoaiNguoiDung } = useSelector((state) => state?.user?.data) || "";
  const { hoTen, taiKhoan, soDT, email, maNhom, matKhau } =
    useSelector((state) => state?.user?.infomationUser) || "";

  const [disable, setDisable] = useState(!"disabled");
  const [checked, setChecked] = useState(false);
  const checkUpdate = () => {
    if (checked) {
      setDisable(!dispatch);
    }
  };

  const checkStart = () => {
    setChecked(!checked);
  };

  const disableChekbot = () => {
    if (formik.errors.hoTen) {
      return "disabled";
    }
    if (formik.errors.soDT) {
      return "disabled";
    }
    if (formik.errors.email) {
      return "disabled";
    } else {
      return !"disabled";
    }
  };

  const formik = useFormik({
    initialValues: {
      hoTen,
      taiKhoan,
      soDT,
      email,
      maNhom,
      maLoaiNguoiDung,
      matKhau,
    },
    onSubmit: (values) => {
      const {
        hoTen,
        taiKhoan,
        soDT,
        email,
        maNhom,
        maLoaiNguoiDung,
        matKhau,
      } = values;
      dispatch(
        updateInfomatinonUser({
          hoTen,
          taiKhoan,
          soDT,
          email,
          maNhom,
          maLoaiNguoiDung,
          matKhau,
        })
      );

      checkStart();
    },
    validate: (values) => {
      let errors = {};

      if (!values.hoTen) {
        errors.hoTen = "Vui lòng nhập họ tên !";
      } else if (values.hoTen.length < 3) {
        errors.hoTen = "Độ dài lớn hơn 3 kí tự !";
      }

      if (!values.email) {
        errors.email = "Vui lòng nhập email !";
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          values.email
        )
      ) {
        errors.email = "Vui lòng nhâp đúng định dạnh email !";
      }

      if (!values.soDT) {
        errors.soDT = "Vui lòng nhập sđt !";
      }

      return errors;
    },
  });

  // console.log(formik.errors.hoTen);
  return (
    <div className="information__user">
      <div className="information__user__content">
        <h1 className="information__user__content__tittle">
          Thông tin cá nhân
        </h1>
        <div className="custom-control custom-switch information__user__content__switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            checked={checked}
            onChange={() => setChecked(!checked)}
            onClick={() => {
              checkUpdate();
            }}
            disabled={disableChekbot()}
          />

          <label className="custom-control-label" htmlFor="customSwitch1">
            Chỉnh sửa thông tin
          </label>
        </div>

        <form
          className="information__user__content__form "
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group row">
            <label className="col-sm-3 col-12 col-form-label">Họ tên: </label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                name="hoTen"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
                disabled={checked ? disable : "disabled"}
              />
              {formik.errors.hoTen ? (
                <div className="alert-danger mt-1 text-center">
                  {formik.errors.hoTen}
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-group row ">
            <label className="col-sm-3 col-form-label">Tài khoản:</label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Sđt:</label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                name="soDT"
                onChange={formik.handleChange}
                value={formik.values.soDT}
                disabled={checked ? disable : "disabled"}
              />
              {formik.errors.soDT ? (
                <div className="alert-danger mt-1 text-center">
                  {formik.errors.soDT}
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Email:</label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                disabled={checked ? disable : "disabled"}
              />
              {formik.errors.email ? (
                <div className="alert-danger mt-1 text-center">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="form-group row  d-none">
            <label className="col-sm-3 col-form-label">Mã Nhóm:</label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.maNhom}
                name="maNhom"
                disabled={checked ? disable : "disabled"}
              />
            </div>
          </div>

          <div className="form-group row  d-none">
            <label className="col-sm-3 col-form-label">Mã người dùng:</label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.maLoaiNguoiDung}
                name="maLoaiNguoiDung"
                disabled={checked ? disable : "disabled"}
              />
            </div>
          </div>

          <div className="form-group row d-none">
            <label className="col-sm-3 col-form-label">matKhau:</label>
            <div className="col-sm-9 information__user__content__form__input">
              <input
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
                name="matKhau"
                disabled={checked ? disable : "disabled"}
              />
            </div>
          </div>

          <div
            className={
              checked ? "information__user__content__form__button" : " d-none"
            }
          >
            <button
              type="submit"
              className="btn btn-success"
              disabled={disableChekbot()}
            >
              Cập nhập tài khoản
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
