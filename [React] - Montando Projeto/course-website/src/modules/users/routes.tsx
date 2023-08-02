import { RouteObject } from "react-router-dom";
import Order from "../orders/screens/Order";
import { OrderRoutesEnum } from "../orders/routes";
import User from "./screens/User";

export enum UserRoutesEnum {
  USER_ALL = "/user",
}
export const userScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER_ALL,
    element: <User />,
  },
];
