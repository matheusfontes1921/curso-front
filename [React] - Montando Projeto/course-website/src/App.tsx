import React from "react";
import "./index.css";
import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes";
import { GlobalProvider } from "./shared/hooks/useGlobalContext";
import { useNotification } from "./shared/hooks/useNotification";
export const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <h1>Tela Principal</h1>,
    errorElement: <h2>Erro</h2>,
  },
];

const router: RemixRouter = createBrowserRouter([...rootRoutes, ...loginRoutes]);
function App() {
  const { contextHolder } = useNotification();
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
