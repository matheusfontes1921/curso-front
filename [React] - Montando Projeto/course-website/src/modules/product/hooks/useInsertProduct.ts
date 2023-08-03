import React, { useEffect, useState } from "react";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { URL_PRODUCT, URL_PRODUCT_ID } from "../../../shared/constants/urls";
import { ProductRoutesEnum } from "../routes";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
/* ideia de tirar os hooks é para tirar a logica de outras classes e
facilitar os testes unitarios
 */
export const useInsertProduct = (productId?: string) => {
  const navigate = useNavigate();
  const { product: productReducer, setProduct: setProductReducer } = useProductReducer();
  const { setNotification } = useGlobalReducer();
  const [loading, setLoading] = useState(false);
  const { request, loading: loadingRequest } = useRequests();
  const [isEdit, setIsEditing] = useState(false);
  const DEFAULT_PRODUCT = {
    name: "",
    price: 0,
    image: "",
    weight: 0,
    lenght: 0,
    height: 0,
    width: 0,
    diameter: 0,
  }
  const [disableButton, setDisableButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>(DEFAULT_PRODUCT);
  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };
  useEffect(() => {
    if (product.name && product.price > 0 && product.image && product.categoryId) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);
  useEffect(() => {
    if (productId) {
      setIsEditing(true);
      setProductReducer(undefined);
      request(
        URL_PRODUCT_ID.replace("{productId}", `${productId}`),
        MethodsEnum.GET,
        setProductReducer,
      );
    } else {
      setProductReducer(undefined);
      setProduct(DEFAULT_PRODUCT);
    }
  }, [productId]);
  useEffect(() => {
    setProductReducer(undefined);
    setProduct(DEFAULT_PRODUCT);
  },[]);
  useEffect(() => {
    if (productReducer) {
      setProduct({
        name: productReducer.name,
        price: productReducer.price,
        image: productReducer.image,
        weight: productReducer.weight,
        lenght: productReducer.lenght,
        width: productReducer.width,
        height: productReducer.height,
        diameter: productReducer.diameter,
      });
    }
  }, [productReducer]);
  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleOnChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };
  const handleInsertProduct = async () => {
    if (productId) {
      await request(
        URL_PRODUCT_ID.replace("{productId}", `${productId}`),
        MethodsEnum.PUT,
        undefined,
        product,
      );
    } else {
      await request(URL_PRODUCT, MethodsEnum.POST, undefined, product);
    }
    navigate(ProductRoutesEnum.PRODUCT);
  };
  return {
    product,
    loading,
    disableButton,
    handleInsertProduct,
    onChangeInput,
    handleOnChangeSelect,
    isEdit,
    setIsEditing,
    loadingRequest,
    handleOnClickCancel,
  };
};
