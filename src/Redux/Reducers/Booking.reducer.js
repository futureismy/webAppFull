import {CHOOSE_SEAT,GET_BOOKING_SUCCESS} from '../Actions/type'
const initialState = {
    danhSachGhe: [],
    gheDangDat:[],
    thongTinPhim:[]
  };
  
  function BookingReducer(state = initialState, actions) {
    const { type, payload } = actions;
    switch (type) {
      case GET_BOOKING_SUCCESS: {
        return { ...state, danhSachGhe: payload.danhSachGhe ,thongTinPhim:payload.thongTinPhim};
      }
      case CHOOSE_SEAT: {
        const index = state.danhSachGhe.findIndex(
          (ghe) => ghe.maGhe === payload.maGhe
        );
        const gheCU = state.danhSachGhe[index];
        //   gheCU.dangChon undefule => !gheCU.dangChon = true
        const gheMoi = { ...gheCU, dangChon: !gheCU.dangChon };
        state.danhSachGhe[index] = gheMoi;
        const danhSachGhe = [...state.danhSachGhe];
        const gheDangDat = danhSachGhe.filter((ghe) => ghe.dangChon === true);
        
        return { ...state, danhSachGhe,gheDangDat };
      }
      default:
        return state;
    }
  }
  export default BookingReducer;