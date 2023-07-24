import React, {useEffect, useState} from "react";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { ProductRoutesEnum } from "../routes";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import {useNavigate} from "react-router-dom";
import {useGlobalContext} from "../../../shared/hooks/useGlobalContext";
/* ideia de tirar os hooks é para tirar a logica de outras classes e
facilitar os testes unitarios
 */
export const useInsertProduct = () => {
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    if (product.name && product.price > 0 && product.image && product.categoryId) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  },[product])
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
