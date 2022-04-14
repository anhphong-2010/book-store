import { LOG_IN } from "../Types/UserType";
import { LOG_OUT } from "../Types/UserType";
let userID = "";
let picture = "";
let name = "";
if (localStorage.getItem("userLoginFB")) {
  userID = JSON.parse(localStorage.getItem("userLoginFB")).userID;
  name = JSON.parse(localStorage.getItem("userLoginFB")).name;
  picture = JSON.parse(localStorage.getItem("userLoginFB")).picture;
}
const initialState = {
  userID: userID,
  name: name,
  picture: picture,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      state.userID = action.userID;
      state.name = action.name;
      state.picture = action.picture;
      localStorage.setItem("userLoginFB", JSON.stringify(state));
      localStorage.setItem("accessToken", JSON.stringify(action.accessToken));
      return { ...state };
    }
    case LOG_OUT: {
      localStorage.removeItem("userLoginFB");
      localStorage.removeItem("accessToken");
      state.userID = "";
      return { ...state };
    }
    default:
  }
  return { ...state };
};
