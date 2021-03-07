import React from "react";
import logoDangNhap from "../../assets/images/logos/changeAvatar.jpg";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserInfomation() {
  const user = useSelector((state) => state.user.data);

  return (
    <div className="use__infomation">
      <div className="row">
        <div className="col-12">
          <nav className="use__infomation__nav">
            <div className="use__infomation__nav__header">
              <img src={logoDangNhap} alt="" />

              <p>{user?.hoTen}</p>
            </div>
            <div className="use__infomation__nav__content">
              <NavLink
                activeClassName="styleNavLinkActive"
                className="styleNavLink"
                to="/user/thongtincanhan"
              >
                <span>Thông tin cá nhân</span>
                <i className="fa fa-user-cog"></i>
              </NavLink>
              <NavLink
                activeClassName="styleNavLinkActive"
                className="styleNavLink"
                to="/user/thaydoimatkhau"
              >
                <span> Thay đổi mật khẩu</span>
                <i className="fa fa-lock"></i>
              </NavLink>
              <NavLink
                activeClassName="styleNavLinkActive"
                className="styleNavLink"
                to="/user/lichsudatve"
              >
                <span>Lịch sử đặt vé</span>
                <i className="fa fa-history"></i>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
