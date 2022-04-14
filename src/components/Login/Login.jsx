import React from "react";
import "antd/dist/antd.css";
import "./Login.scss";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/Actions/UserAction";
export default function Login(props) {
  let { navigator } = props;
  const dispatch = useDispatch();
  let [userLogin, setUserLogin] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  });
  const componentClicked = () => {
    console.log("clicked");
  };
  const responseFacebook = (response) => {
    setUserLogin({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken,
    });
  };
  let fbContent;
  if (userLogin.isLoggedIn) {
    dispatch(
      logInAction(
        userLogin.userID,
        userLogin.name,
        userLogin.picture,
        userLogin.accessToken
      )
    );
    navigator.history.push("/home");
  } else {
    fbContent = (
      <FacebookLogin
        appId="764903727628318"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }
  return <div className="login-wrapper">{fbContent}</div>;
}
