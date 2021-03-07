import React from "react";
import dataListImage from "../../assets/data/appstore.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.appstore.scss";

function AppStore() {
  const imageList = dataListImage;

  const renderImageList = () => {
    return imageList.map((item, index) => {
      return (
        <img
          key={index}
          src={`../images/appstore/${item.name}`}
          style={{ display: "block", width: "100%" }}
          alt={item.name}
        />
      );
    });
  };

  return (
    <section id="appstore">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="appstore__content">
              <p className="appstore__textlarge">Ứng dụng tiện lợi dành cho</p>
              <p className="appstore__textlarge">người yêu điện ảnh</p>
              <p className="appstore__textsmall">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn-default">
                App miễn phí - Tải về ngay!
              </button>
              <p>
                TIX có hai phiên bản
                <a className="link-app" href="#">
                  iOS
                </a>
                &amp;
                <a className="link-app" href="#">
                  Android
                </a>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              autoPlay={true}
              swipeable={true}
              emulateTouch={true}
              showArrows={false}
              showStatus={false}
              infiniteLoop={true}
              className="appstore__slider"
            >
              {renderImageList()}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppStore;
