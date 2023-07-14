import { RouteObject } from "react-router-dom";
import React from "react";
import FirstScreen from "./index";

export const firstScreenRoutes: RouteObject[] = [
  {
    path: "/",
    element: <FirstScreen />,
    errorElement: <p>Página não encontrada</p>,
  },
];
