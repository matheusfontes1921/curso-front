import { useAppSelector } from "../../hooks";
import { ProductType } from "../../../shared/types/ProductType";
import { setProductsAction } from "./index";

export const useProductReducer = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const setProducts = (products: ProductType[]) => {
    dispatch(setProductsAction(products));
  };
  return {
    products,
    setProducts,
  };
};
