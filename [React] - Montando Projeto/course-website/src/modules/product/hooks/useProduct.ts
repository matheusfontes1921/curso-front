import { useEffect, useState } from "react";
import { ProductRoutesEnum } from "../routes";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { ProductType } from "../../../shared/types/ProductType";
import { useRequests } from "../../../shared/hooks/useRequests";
import { useNavigate } from "react-router-dom";
import {URL_PRODUCT, URL_PRODUCT_ID, URL_USER, URL_USER_ID} from "../../../shared/constants/urls";
import {MethodsEnum} from "../../../shared/enums/methods.enum";

export const useProduct = () => {
  const [productIdDelete, setProductIdDelete] = useState<number | undefined>();
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
  const handelDeleteProduct = async () => {
    await request(URL_PRODUCT_ID.replace("{productID}", `${productIdDelete}`), MethodsEnum.DELETE);
    await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
    setProductIdDelete(undefined);
  };
  const handelEditProduct = async (productId: number) => {
    navigate(ProductRoutesEnum.PRODUCT_EDIT.replace(":productId",`${productId}`))
    await request(URL_PRODUCT_ID.replace("{productID}", `${productId}`), MethodsEnum.DELETE);
    await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };
  const handleCloseModalDelete = () => {
    setProductIdDelete(undefined);
  };
  const handleOpenModalDelete = (productId: number) => {
    setProductIdDelete(productId);
  }
  return {
    handleOpenModalDelete,
    handleOnClickInsert,
    handleCloseModalDelete,
    onSearch,
    setProductsFiltered,
    productsFiltered,
    handelDeleteProduct,
    handelEditProduct,
    openModalDelete: !!productIdDelete,
  };
};
