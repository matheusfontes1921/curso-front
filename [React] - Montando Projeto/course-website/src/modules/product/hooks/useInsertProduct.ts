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
  const { request } = useRequests();
  const [disableButton, setDisableButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: "",
    weight: 0,
    lenght: 0,
    height: 0,
    width: 0,
    diameter: 0,
  });
  useEffect(() => {
    if (product.name && product.price > 0 && product.image && product.categoryId) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);
  useEffect(() => {
    if (productId) {
      setProductReducer(undefined);
      request(
        URL_PRODUCT_ID.replace("{productId}", `${productId}`),
        MethodsEnum.GET,
        setProductReducer,
      );
    }
  }, [productId]);
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
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification("Sucesso!", "success", "Produto inserido com sucesso!");
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
      });
    setLoading(false);
  };
  return {
    product,
    loading,
    disableButton,
    handleInsertProduct,
    onChangeInput,
    handleOnChangeSelect,
  };
};
