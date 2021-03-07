import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import MovieDetailMainContent from "../../components/MovieDetailMainContent";
import MovieDetailMainTop from "../../components/MovieDetailMainTop";
import { getMovieDetailRequest } from "../../Redux/Actions/movie.action";
import { getScheduleTheaterSystemRequest } from "../../Redux/Actions/theater.action";
export default function MovieDetail(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  // console.log('moveis',movieDetail);

  useEffect(() => {
    dispatch(getScheduleTheaterSystemRequest());
  }, []);

  useEffect(() => {
    dispatch(
      getMovieDetailRequest(
        id,
        () => {
          setLoading(false);
        },
        () => {
          swal({
            title: "Sự cố máy chủ",
            icon: "error",
          });
        }
      )
    );
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <MovieDetailMainTop movieDetail={movieDetail} />
      <MovieDetailMainContent movieDetail={movieDetail} />
      <Footer />
    </div>
  );
}
