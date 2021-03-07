import React, { memo } from "react";
import "./StepCheckout.scss";
import logoDangNhap from "../../assets/images/logos/changeAvatar.jpg";
import { useSelector } from "react-redux";
const StepCheckout = () => {
  const user = useSelector((state) => state.user.data);

  return (
    <div className="StepCheckout">
      <div className="StepCheckout__step">
        <ul>
          <li className="active">
            <span>01</span>
            <span>CHỌN GHẾ & THANH TOÁN</span>
          </li>
          <li>
            <span>02</span>
            <span>KẾT QUẢ ĐẶT VÉ</span>
          </li>
        </ul>
      </div>
      <div className="StepCheckout__account">
        <p>
          <img src={logoDangNhap} alt="" />
          {user?.hoTen}
        </p>
      </div>
    </div>
  );
};

export default memo(StepCheckout);
