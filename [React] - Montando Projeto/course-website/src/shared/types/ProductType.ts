import {CategoryType} from "./CategoryType";

export interface ProductType {
    id: number;
    name: string;
    image: string;
    price: number;
    category?: CategoryType;
    weight: number;
    lenght: number;
    height: number;
    width: number;
    diameter: number;
}