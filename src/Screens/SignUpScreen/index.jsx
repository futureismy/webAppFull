import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.scss";
import { signUpUserSchema } from "../../Service/User";
import { connect, useDispatch } from "react-redux";
import { actSignUpApi } from "../../Redux/Actions/user.action";

const SignUpScreen = (props) => {
  // console.log(props);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(actSignUpApi(values, history));
  };

  return (
    <div id="signup">
      <div className="signup signup--customize">
        <div className="signup__wrapper">
          <img
            className="signup__logo"
            src="../images/logos/group@2x.png"
            alt="dang-ky"
          />

          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              maNhom: "GP01",
              maLoaiNguoiDung: "KhachHang",
              hoTen: "",
            }}
            validationSchema={signUpUserSchema}
            // ham thu 2 can phai co: truoc khi chay hafm handelsubmit thi formik se xet xem schema validate da dung chua
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form>
                <div className="form-group text-left">
                  <label>Tài khoản: </label>
                  <Field
                    type="text"
                    name="taiKhoan"
                    className="form-control"
                    onChange={formikProps.handleChange}
                  ></Field>
                  <ErrorMessage name="taiKhoan">
                    {(message) => (
                      <div className="alert text-danger alert-validation">
                        {message}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group text-left">
                  <label>Mật khẩu: </label>
                  <Field
                    type="password"
                    name="matKhau"
                    className="form-control"
                    onChange={formikProps.handleChange}
                  ></Field>
                  <ErrorMessage name="matKhau">
                    {(message) => (
                      <div className="alert text-danger alert-validation ">
                        {message}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group text-left">
                  <label>Họ tên: </label>
                  <Field
                    type="text"
                    name="hoTen"
                    className="form-control"
                    onChange={formikProps.handleChange}
                  ></Field>
                  <ErrorMessage name="hoTen">
                    {(message) => (
                      <div className="alert text-danger alert-validation ">
                        {message}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group text-left">
                  <label>Email: </label>
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={formikProps.handleChange}
                  ></Field>
                  <ErrorMessage name="email">
                    {(message) => (
                      <div className="alert text-danger alert-validation ">
                        {message}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group text-left">
                  <label>Số điện thoại: </label>
                  <Field
                    type="text"
                    name="soDt"
                    className="form-control"
                    onChange={formikProps.handleChange}
                  ></Field>
                  <ErrorMessage name="soDt">
                    {(message) => (
                      <div className="alert text-danger alert-validation ">
                        {message}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group text-left">
                  <label>Mã nhóm:</label>
                  <Field
                    as="select"
                    className="form-control"
                    name="maNhom"
                    onChange={formikProps.handleChange}
                  >
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                    <option>GP04</option>
                    <option>GP05</option>
                    <option>GP06</option>
                    <option>GP07</option>
                    <option>GP08</option>
                    <option>GP09</option>
                    <option>GP10</option>
                  </Field>
                  <ErrorMessage name="maNhom">
                    {(message) => (
                      <div className="alert text-danger alert-validation ">
                        {message}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="text-center mt-5">
                  <button className="btn btn-success" type="submit">
                    Đăng ký
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="signup__close">
            <NavLink className="btn-close" to="/home">
              <i className="fa fa-times"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errSignUp: state.user.errSignUp,
    dataSignUp: state.user.dataSignUp,
  };
};

export default connect(mapStateToProps)(SignUpScreen);
