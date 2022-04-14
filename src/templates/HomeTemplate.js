import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import SideDrawer from "../components/Header/SideDrawer";
import Backdrop from "../components/Header/Backdrop";
import Footer from "../components/Footer/Footer";

const HomeLayout = (props) => {
  let [state, setState] = useState({
    sideDrawerOpen: false,
  });
  const drawerToggleClickHandler = () => {
    setState((preState) => {
      return { sideDrawerOpen: !preState.sideDrawerOpen };
    });
  };
  const backDropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };
  let backDrop;
  if (state.sideDrawerOpen) {
    backDrop = <Backdrop click={backDropClickHandler} />;
  }
  return (
    <Fragment>
      <Header drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={state.sideDrawerOpen} />
      {backDrop}
      {props.children}
      <Footer />
    </Fragment>
  );
};
export const HomeTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <props.Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
