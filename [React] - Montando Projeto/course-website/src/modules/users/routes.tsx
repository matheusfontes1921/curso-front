import { RouteObject } from "react-router-dom";
import Order from "../orders/screens/Order";
import { OrderRoutesEnum } from "../orders/routes";
import User from "./screens/User";
import UserInsert from "./screens/UserInsert";

export enum UserRoutesEnum {
  USER_ALL = "/user",
  USER_INSERT = "/user/insert",
}
export const userScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER_ALL,
    element: <User />,
  },
  {
    path: UserRoutesEnum.USER_INSERT,
    element: <UserInsert />,
  },
];
