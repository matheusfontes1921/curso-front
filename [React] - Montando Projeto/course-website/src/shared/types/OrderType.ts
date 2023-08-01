import { UserType } from "../../modules/login/types/UserType";
import { PaymentType } from "./PaymentType";
import {ProductType} from "./ProductType";
import {OrderProductType} from "./OrderProductType";

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  user: UserType;
  amountProducts: number;
  payment?: PaymentType;
  ordersProduct?: OrderProductType[];
}
