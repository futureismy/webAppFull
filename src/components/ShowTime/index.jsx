import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import dataMovie from "../../assets/data/movieListUpComing.json";
import Slider from "react-slick";
import nextImage from "../../assets/images/logos/next-session.png";
import preImage from "../../assets/images/logos/back-session.png";
import MovieItem from "../MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import { youtube_parser } from "../../Helpers";

const ShowTime = (props) => {
  const movieList = props.movieList;
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          touchMove: true,
          rows: 5,
          arrows: false,
        },
      },
    ],
  };

  const [iframe, setIframe] = useState("");
  const handleModal = (trailer) => {
    setOpen(true);
    setIframe(trailer);
  };

  const movieListUpComing = dataMovie;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <span
      {...props}
      className="slick-prev slick-arrow showtime-arrow"
      style={{
        backgroundImage: `url(${preImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></span>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <span
      {...props}
      className="slick-next slick-arrow showtime-arrow"
      style={{
        backgroundImage: `url(${nextImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></span>
  );

  return (
    <section id="showtime">
      <div className="container">
        <ul className="nav nav-tabs" id="showstime-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="showing-tab"
              data-toggle="tab"
              href="#showing"
              role="tab"
              aria-controls="showing"
              aria-selected="true"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="comingsoon-tab"
              data-toggle="tab"
              href="#comingsoon"
              role="tab"
              aria-controls="comingsoon"
              aria-selected="false"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="showtime-content">
          <div
            className="tab-pane fade active show"
            id="showing"
            role="tabpanel"
            aria-labelledby="showing-tab"
          >
            <Slider
              className="showtime-slider"
              {...settings}
              nextArrow={<SlickArrowRight />}
              prevArrow={<SlickArrowLeft />}
            >
              {movieList.map(function (movie) {
                return (
                  <React.Fragment key={movie.maPhim}>
                    <MovieItem movie={movie} handleModal={handleModal} />
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>

          <div
            className="tab-pane fade"
            id="comingsoon"
            role="tabpanel"
            aria-labelledby="comingsoon-tab"
          >
            <Slider
              className="showtime-slider"
              {...settings}
              nextArrow={<SlickArrowRight />}
              prevArrow={<SlickArrowLeft />}
            >
              {movieListUpComing?.map((movie) => {
                return (
                  <React.Fragment key={movie.maPhim}>
                    <MovieItem movie={movie} />
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* modal video */}
      {iframe ? (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={youtube_parser(iframe)}
          onClose={() => setOpen(false)}
        />
      ) : (
        ""
      )}

      <div className="text-center showtime__btn">
        <a className="btn-default">XEM THÊM</a>
      </div>
    </section>
  );
};

export default ShowTime;
