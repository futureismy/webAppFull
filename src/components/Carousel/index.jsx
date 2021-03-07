import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Carousel from "react-bootstrap/Carousel";
import nextImage from "../../assets/images/logos/next-session.png";
import preImage from "../../assets/images/logos/back-session.png";
import "./style.scss";
import { youtube_parser } from "../../Helpers";

const CarouselSlider = (props) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [iframe, setIframe] = useState(0);

  // console.log(iframe);

  const movieList = [
    {
      maPhim: 1323,
      tenPhim: "What's wrong with secretary kim",
      biDanh: "what-s-wrong-with-secretary-kim",
      trailer: "https://www.youtube.com/embed/-ir2IflOHv4",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/what-s-wrong-with-secretary-kim_gp10.jpg",
      moTa:
        "What's Wrong with Secretary Kim? is a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, which was then serialized into a comic in 2015 via KakaoPage. The series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes. ",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-06-16T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1338,
      tenPhim: "Fight for my way",
      biDanh: "fight-for-my-way",
      trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
      moTa:
        "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-09-17T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1353,
      tenPhim: "Bloodshot",
      biDanh: "bloodshot",
      trailer: "https://www.youtube.com/embed/vOUVVDWdXbo",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
      moTa:
        "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce.",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-08-21T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1398,
      tenPhim: "Itawon class",
      biDanh: "itawon-class",
      trailer: "https://www.youtube.com/embed/NeaHNQJ1kCo",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
      moTa:
        "The story is about underdogs with big dreams and third-rate specs struggling to survive, craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-01-10T00:00:00",
      danhGia: 5,
    },
  ];
  const renderMovieList = () => {
    return movieList.map((movie, idx) => {
      const { hinhAnh, trailer } = movie;
      return (
        <Carousel.Item key={idx}>
          <div
            style={{
              backgroundImage: `url('${hinhAnh}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              paddingBottom: "43%",
            }}
          ></div>
          <div className="carousel__overlay overlay">
            <div className="carousel__overlay__play btn-play">
              <a
                className="carousel_popup"
                href="#modal-carousel"
                data-toggle="modal"
                onClick={() => {
                  setOpen(true);
                  setIframe(trailer);
                }}
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </Carousel.Item>
      );
    });
  };

  return (
    <section id="carousel">
      <Carousel
        id="carouselCustomize"
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={
          <span className="carousel-control-btn">
            <img src={preImage} alt="pre-icon" />
          </span>
        }
        nextIcon={
          <span className="carousel-control-btn">
            <img src={nextImage} alt="next-icon" />
          </span>
        }
      >
        {renderMovieList()}
      </Carousel>

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
    </section>
  );
};

export default CarouselSlider;
