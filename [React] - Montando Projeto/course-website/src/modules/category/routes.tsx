import { RouteObject } from "react-router-dom";
import React from "react";
import Category from "./";
export enum CategoryRoutesEnum {
  CATEGORY = "/category",
  CATEGORY_INSERT = "/category/insert",
}

export const categoryRoutes: RouteObject[] = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <Category />,
  },
];
