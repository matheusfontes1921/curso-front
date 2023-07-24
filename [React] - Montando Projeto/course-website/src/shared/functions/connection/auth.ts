import { getItem, removeItem, setItem } from "./storageProxy";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { UserType } from "../../../modules/login/types/UserType";
import {NavigateFunction, redirect} from "react-router-dom";
import { connectionAPIGet } from "./connectionAPI";
import { URL_USER } from "../../constants/urls";
import {LoginRoutesEnum} from "../../../modules/login/routes";
export const unsetAuthorizationToken = () => removeItem(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItem(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItem(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  const user = await connectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
  });
  if (!user) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  return null;
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(LoginRoutesEnum.LOGIN);
};
