import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieListRequest } from "../../Redux/Actions/movie.action";
import CarouselSlider from "../../components/Carousel";
import News from "../../components/News";
import ShowTime from "../../components/ShowTime";
import MovieSchedule from "../../components/MovieSchedule";
import AppStore from "../../components/AppStore";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import "./style.scss";

class Home extends Component {
  renderHTML = () => {
    const { movieList, isLoading } = this.props;
    if (isLoading) return <Loader />;
    if (movieList && movieList.length > 0) {
      return (
        <>
          <CarouselSlider />
          <ShowTime movieList={movieList} />
          <MovieSchedule />
          <News />
          <AppStore />
          <Footer />
        </>
      );
    }
  };
  render() {
    return <> {this.renderHTML()}</>;
  }

  componentDidMount() {
    this.props.dispatch(getMovieListRequest());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    isLoading: state.movie.isLoading,
    loading: state.user.loading,
  };
};

export default connect(mapStateToProps)(Home);
