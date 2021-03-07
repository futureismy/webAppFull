import React from "react";
import logo from "../../assets/images/logos/web-logo.png";
import "./style.scss";

function Loader(props) {
  return (
    <div className="logo__loading active">
      <div className="logo__loading__img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loader;
