import { getItem, removeItem, setItem } from "./storageProxy";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { UserType } from "../../../modules/login/types/UserType";
import {NavigateFunction, redirect} from "react-router-dom";
import { connectionAPIGet } from "./connectionAPI";
import { URL_USER } from "../../constants/urls";
import {LoginRoutesEnum} from "../../../modules/login/routes";
import {UserTokenType} from "../../types/UserTokenType";
export const unsetAuthorizationToken = () => removeItem(AUTHORIZATION_KEY);

export const getUserInfoToken = (): UserTokenType | undefined => {
  const token = getAuthorizationToken();
  const tokenVector = token?.split(".");
  if(tokenVector && tokenVector.length > 1) {
    return JSON.parse(window.atob(tokenVector[1])); /*convertendo base64 p string */
  }
  return undefined;
}
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
