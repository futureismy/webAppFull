import Axios from "axios";

class TheaterService {
  getScheduleTheaterSystem() {
    return Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP06",
    });
  }

  getTheaterSystemList(id) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
    });
  }

  getCinemaSystemInformation() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
    });
  }
}

export default TheaterService;
