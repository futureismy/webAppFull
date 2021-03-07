import { combineReducers } from "redux";
import MovieReducer from "./Movie.reducer";
import TheaterReducer from "./Theater.reducer";
import UserReducer from "./User.reducer";
import Booking from './Booking.reducer'

const RootReducer = combineReducers({
  movie: MovieReducer,
  theater: TheaterReducer,
  user: UserReducer,
  booking: Booking,
});

export default RootReducer;
