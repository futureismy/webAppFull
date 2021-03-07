import InfomationUser from "../components/InfomationUser";
import ChangeThePasswordUser from "../components/ChangeThePasswordUser";
import TicketBookingHistoryUser from "../components/TicketBookingHistoryUser";
const routerUser = [
  {
    exact: false,
    path: "/user/thongtincanhan",
    component: InfomationUser,
  },
  {
    exact: false,
    path: "/user/thaydoimatkhau",
    component: ChangeThePasswordUser,
  },
  {
    exact: false,
    path: "/user/lichsudatve",
    component: TicketBookingHistoryUser,
  },
];

export { routerUser };
