import "./App.scss";
import Checkout from "./Screens/Checkout";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./Screens/Login";
import LayoutTheme from "./components/Layout";
import LayoutUserTheme from "./components/Layout/user";
import { routesHome } from "./routes";
import { routerUser } from "./routes/user";
import SignUpScreen from "./Screens/SignUpScreen";
import PageNotFound from "./Screens/PageNotFound";
import { useEffect } from "react";
import { connect } from "react-redux";
import { actTryLogin } from "./Redux/Actions/user.action";
import ProtectedRoute from "./components/ProtectedRoute";

function App(props) {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <LayoutTheme
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutUser = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <LayoutUserTheme
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  useEffect(() => {
    // console.log(props);
    props.fetchTryLogin(props.history);
  }, []);

  return (
    <>
      <Switch>
        {showLayoutHome(routesHome)}

        {showLayoutUser(routerUser)}
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/checkout/:maLichChieu" Component={Checkout} />

        <Route path="/signup">
          <SignUpScreen />
        </Route>
        <Route path="">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTryLogin: (history) => {
      dispatch(actTryLogin(history));
    },
  };
};

const connectedComponent = connect(null, mapDispatchToProps)(App);

export default withRouter(connectedComponent);
