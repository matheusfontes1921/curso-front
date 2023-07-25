import type { Router as RemixRouter } from "@remix-run/router";
import { useEffect } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { firstScreenRoutes } from "./modules/firstScreen/routes";
import { loginRoutes } from "./modules/login/routes";
import { productRoutes } from "./modules/product/routes";
import { URL_USER } from "./shared/constants/urls";
import { MethodsEnum } from "./shared/enums/methods.enum";
import {getAuthorizationToken, verifyLoggedIn} from "./shared/functions/connection/auth";
import { useGlobalContext } from "./shared/hooks/useGlobalContext";
import { useNotification } from "./shared/hooks/useNotification";
import { useRequests } from "./shared/hooks/useRequests";
import {categoryRoutes} from "./modules/category/routes";

const routes: RouteObject[] = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...productRoutes,
  ...categoryRoutes,
  ...firstScreenRoutes,
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

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
