import { useEffect, useState } from "react";
import { ProductRoutesEnum } from "../routes";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { ProductType } from "../../../shared/types/ProductType";
import { useRequests } from "../../../shared/hooks/useRequests";
import { useNavigate } from "react-router-dom";
import {URL_PRODUCT, URL_PRODUCT_ID, URL_USER, URL_USER_ID} from "../../../shared/constants/urls";
import {MethodsEnum} from "../../../shared/enums/methods.enum";

export const useProduct = () => {
  const { products, setProducts } = useProductReducer();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();
  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };
  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([...productsFiltered.filter((product) => product.name.includes(value))]);
    }
  };
  const handelDeleteProduct = async (productId: number) => {
    await request(URL_PRODUCT_ID.replace("{productID}", `${productId}`), MethodsEnum.DELETE);
    await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };
  return {
    handleOnClickInsert,
    onSearch,
    setProductsFiltered,
    productsFiltered,
    handelDeleteProduct,
  };
};