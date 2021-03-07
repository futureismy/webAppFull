import React from "react";
import { Redirect, Route } from "react-router-dom";

function LayoutProtected(props) {
  return <div>{props.children}</div>;
}

export default function ProtectedRoute({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("User")) {
          return (
            <LayoutProtected>
              <Component {...propsComponent} />
            </LayoutProtected>
          );
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}
