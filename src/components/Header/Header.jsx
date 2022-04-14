import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logOutAction } from "../../redux/Actions/UserAction";
import { Modal } from "antd";
export default function Header(props) {
  const dispatch = useDispatch();
  function showPromiseConfirm() {
    confirm({
      title: "Do you want to log out?",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 500);
          logOut();
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  }

  const logOut = () => {
    dispatch(logOutAction());
  };
  const { confirm } = Modal;
  const info = useSelector((state) => state.UserReducer);
  const renderUser = () => {
    if (info.userID === "") {
      return (
        <li className="item-list">
          <NavLink className="item-link" to="/login">
            Users
          </NavLink>
        </li>
      );
    } else {
      return (
        <Fragment>
          <li className="item-list">
            <NavLink className="item-link" to="/">
              <div className="d-flex justify-content-between">
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                    borderColor: "#fa923f",
                  }}
                  src={info.picture}
                  alt={info.picture}
                />
                <span>{info.userID}</span>
              </div>
            </NavLink>
          </li>
          <li className="item-list">
            <ExitToAppIcon
              className="item-link"
              style={{ cursor: "pointer" }}
              onClick={showPromiseConfirm}
            />
          </li>
        </Fragment>
      );
    }
  };
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <NavLink className="logo-link" to="/home">
            <span className="logo-span">Eng</span>-42day
          </NavLink>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <ul className="toolbar_navigation-list">
            <li className="item-list">
              <NavLink className="item-link" to="/">
                Books
              </NavLink>
            </li>
            {renderUser()}
          </ul>
        </div>
      </nav>
    </header>
  );
}
