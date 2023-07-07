import { RouteObject} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import React from "react";

export const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginScreen />,
  },
];
