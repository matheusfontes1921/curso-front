import React, {useEffect} from "react";
import "./index.css";
import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouteObject, RouterProvider, useNavigate } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes";
import { GlobalProvider, useGlobalContext } from "./shared/hooks/useGlobalContext";
import { useNotification } from "./shared/hooks/useNotification";
import { firstScreenRoutes } from "./modules/firstScreen/routes";
import { productRoutes } from "./modules/product/routes";
import { verifyLoggedIn } from "./shared/functions/connection/auth";
import useRequests from "./shared/hooks/useRequests";
import {URL_USER} from "./shared/constants/urls";
import {MethodsEnum} from "./shared/enums/methods.enum";
export const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <h1>Tela Principal</h1>,
    errorElement: <h2>Erro</h2>,
  },
];

const routes: RouteObject[] = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [...productRoutes, ...firstScreenRoutes].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);


function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();
  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser);
  },[])
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
// interface PStyledLink {
//   isBlue?: boolean;
// }
// const StyledLink = styled.div<PStyledLink>`
//   /* chama a interface responsável pela lógica */
//   color: ${(props) => (props.isBlue ? "blue" : "pink")}; /* joga a lógica de mudança de cor */
//   font-weight: bold;
// `;
export default App;
