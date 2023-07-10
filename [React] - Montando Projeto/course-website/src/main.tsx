import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router";
import LoginScreen from "./modules/login/screens/LoginScreen";
import { loginRoutes } from "./modules/login/routes";
import {GlobalProvider} from "./shared/hooks/useGlobalContext";
export const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <h1>Tela Principal</h1>,
    errorElement: <h2>Erro</h2>,
  },
];

const router: RemixRouter = createBrowserRouter([/*...rootRoutes,*/ ...loginRoutes]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
);
