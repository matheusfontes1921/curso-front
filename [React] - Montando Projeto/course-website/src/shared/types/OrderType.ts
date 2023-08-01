import {UserType} from "../../modules/login/types/UserType";
import {PaymentType} from "./PaymentType";

export interface OrderType {
    id: number;
    date: string;
    userId: number;
    user: UserType;
    ammountProducts: number;
    payment?: PaymentType;
}