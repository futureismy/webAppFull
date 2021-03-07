import React from "react";
import "./style.scss";

const Footer = () => {
  const imagePartnerList = [
    "cgv.png",
    "bhd.png",
    "galaxycine.png",
    "cinestar.png",
    "lotte.png",
    "megags.png",
    "bt.jpg",
    "dongdacinema.png",
    "TOUCH.png",
    "cnx.jpg",
    "STARLIGHT.png",
    "dcine.png",
    "zalopay_icon.png",
    "payoo.jpg",
    "VCB.png",
    "AGRIBANK.png",
    "VIETTINBANK.png",
    "IVB.png",
    "123go.png",
    "laban.png",
  ];

  const renderImagePartnerList = () => {
    return imagePartnerList.map((image, index) => {
      return (
        <li key={index}>
          <a href="#">
            <img src={`../images/logos/${image}`} alt="partner" />
          </a>
        </li>
      );
    });
  };
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer__item">
                <div className="title">Tix</div>
                <ul className="footer__menu">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Thỏa thuận sử dụng</a>
                  </li>
                  <li>
                    <a href="#">Brand Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12  col-lg-3">
              <div className="footer__item">
                <div className="title">Đối tác</div>
                <ul className="footer__partner">{renderImagePartnerList()}</ul>
              </div>
            </div>
            <div className="col-12  col-lg-3">
              <div className="footer__item">
                <div className="title">Mobile app</div>
                <div className="content">
                  <a className="footer__social" href="#">
                    <img src="../images/logos/apple-logo.png" alt="logo" />
                  </a>
                  <a className="footer__social" href="#">
                    <img src="../images/logos/android-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12  col-md-6 col-lg-3">
              <div className="footer__item footer__item-social">
                <div className="title">Social</div>
                <div className="content">
                  <a className="footer__social" href="#">
                    <img src="../images/logos/facebook-logo.png" alt="logo" />
                  </a>
                  <a className="footer__social" href="#">
                    <img src="../images/logos/zalo-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ft__site">
          <div className="row">
            <div className="col-12 col-md-1">
              <div className="ft__site__item image">
                <img
                  className="zionlogo"
                  src="../images/logos/zion-logo.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="ft__site__item">
                <div className="title">
                  Tix – sản phẩm của công ty cổ phần zion
                </div>
                <div className="content">
                  <p>
                    Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                    Hồ Chí Minh, Việt Nam.
                  </p>
                  <p>
                    Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
                    đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                    kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                  </p>
                  <p>
                    Số Điện Thoại (Hotline):
                    <a href="tel:1900 545 436">1900 545 436</a>
                  </p>
                  <p>
                    Email: <a href="mailto:support@tix.vn">support@tix.vn</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ft__site__item image">
                <img
                  className="check"
                  src="../images/logos/dathongbao.png"
                  alt="kiemduyet"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
