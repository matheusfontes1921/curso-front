import { useAppSelector } from "../../hooks";
import { ProductType } from "../../../shared/types/ProductType";
import {setProductAction, setProductsAction} from "./index";

export const useProductReducer = () => {
  const { products, product } = useAppSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const setProducts = (products: ProductType[]) => {
    dispatch(setProductsAction(products));
  };
  const setProduct = (product?: ProductType) => {
    dispatch(setProductAction(product))
  };
  return {
    products,
    product,
    setProducts,
    setProduct,
  };
};
