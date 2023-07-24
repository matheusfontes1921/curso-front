import { RouteObject } from "react-router-dom";
import React from "react";
import FirstScreen from "./index";
import PageNotFound from "./screens/PageNotFound";
export enum FirstScreenRoutesEnum {
  FIRST_SCREEN = "/"
}

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
