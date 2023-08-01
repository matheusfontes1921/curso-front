import {PaymenStatusType} from "./PaymenStatusType";

export interface PaymentType {
    id: number;
    statusId: number;
    price: number;
    discount: number;
    finalPrice: number;
    type: string;
    paymentStatus?: PaymenStatusType;
}