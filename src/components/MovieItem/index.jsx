import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { capitalizeWords } from "../../Helpers";
import { actRedirectToMovieDetail } from "../../Redux/Actions/movie.action";
import "./style.scss";

function MovieItem(props) {
  const movie = props.movie;
  // console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  // console.log(width);

  return (
    <div className="col mvshowtime" key={movie.maPhim}>
      <div className="card mvshowtime__card">
        <div
          className="mvshowtime__image"
          style={{
            backgroundImage: `url('${movie.hinhAnh}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            if (width < 578) {
              dispatch(actRedirectToMovieDetail(history, movie.maPhim));
            }
          }}
        >
          <div className="mvshowtime__overlay">
            <div className="btn-play">
              <a
                href={movie.trailer}
                data-toggle="modal"
                data-target="#modal-showtime"
                onClick={() => {
                  // console.log(movie.trailer);
                  return props.handleModal(movie.trailer);
                }}
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          <div className="mvshowtime__rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />

            <span>({movie.danhGia})</span>
          </div>
        </div>

        <div className="card-body mvshowtime__card__body">
          <div className="mvshowtime__content mvshowtime__content__overlay">
            <h4 className="card-title mvshowtime__title text-capitalize">
              <span className="btn-age">C16</span>
              {capitalizeWords(movie.tenPhim)}
            </h4>
            <p className="card-text mt-2">120 phút</p>
          </div>
          <div className="mvshowtime__addToCart">
            <NavLink
              to={`/movie-detail/${movie.maPhim}`}
              className="btn-default"
            >
              Mua vé
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
