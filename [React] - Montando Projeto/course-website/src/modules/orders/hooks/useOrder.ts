import { useOrderReducer } from "../../../store/reducers/orderReducer/useOrderReducer";
import { useEffect } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import { URL_ORDERS } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";

export const useOrder = () => {
  const { orders, setOrders } = useOrderReducer();
  const { request } = useRequests();
  useEffect(() => {
    if (!orders) {
      request(URL_ORDERS, MethodsEnum.GET, setOrders);
    }
  }, []);
  return {
    orders,
  };
};
