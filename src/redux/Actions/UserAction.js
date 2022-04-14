import { LOG_IN } from "../Types/UserType";
import { LOG_OUT } from "../Types/UserType";

export const logInAction = (name, userID, picture, accessToken) => {
  return { type: LOG_IN, name, userID, picture, accessToken };
};

export const logOutAction = () => {
  return { type: LOG_OUT };
};
