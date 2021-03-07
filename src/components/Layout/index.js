import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default function LayoutTheme({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <Layout>
          <Component {...propsComponent} />
        </Layout>
      )}
    />
  );
}
