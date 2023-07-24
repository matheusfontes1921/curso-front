import { getItem, removeItem, setItem } from "./storageProxy";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { UserType } from "../../../modules/login/types/UserType";
import { NavigateFunction } from "react-router-dom";
import { connectionAPIGet } from "./connectionAPI";
import { URL_USER } from "../../constants/urls";
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
    location.href = "/login";
  }
  await connectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    location.href = "/login";
  });

  return null;
};

export const logout = () => {
  unsetAuthorizationToken();
  location.href="/login";
}
