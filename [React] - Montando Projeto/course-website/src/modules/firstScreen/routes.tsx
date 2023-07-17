import { RouteObject } from "react-router-dom";
import React from "react";
import FirstScreen from "./index";
import PageNotFound from "./screens/PageNotFound";

export const firstScreenRoutes: RouteObject[] = [
  {
    path: "/",
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
