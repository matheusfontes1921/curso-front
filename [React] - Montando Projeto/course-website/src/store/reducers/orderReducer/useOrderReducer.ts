import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { OrderType } from "../../../shared/types/OrderType";
import { setOrdersAction } from "./index";

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders } = useAppSelector((state) => state.orderReducer);
  const setOrders = (currentOrders: OrderType[]) => {
    dispatch(setOrdersAction(currentOrders));
  };
  return {
    orders,
    setOrders,
  };
};
