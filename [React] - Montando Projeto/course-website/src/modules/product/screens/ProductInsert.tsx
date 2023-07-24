import Screen from "../../../shared/screen/Screen";
import { ProductRoutesEnum } from "../routes";
import { ListBreadcrumb } from "../../../shared/breadcrumb/Breadcrumb";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_CATEGORIES, URL_PRODUCT } from "../../../shared/constants/urls";
import { ProductInsertContainer } from "../styles/productInsert.style";
import { LimitedContainer } from "../../login/components/styles/limited.style";
import Input from "../../../shared/input/input/Input";
import Button from "../../../shared/button/button/Button";
import Select from "../../../shared/input/select/Select";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { DisplayFlexJustifyRight } from "../../login/components/styles/display.style";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import InputMoney from "../../../shared/input/inputMoney/InputMoney";

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: "",
  });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    }
  }, []);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };
  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };
  const handleInsertProduct = async () => {
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification("Sucesso!", "success", "Produto inserido com sucesso!");
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
      });
  };

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };
  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "PRODUTOS",
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: "INSERIR PRODUTO",
        },
      ]}
    >
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChange(event, "name")}
            value={product.name}
            margin="0 0 16px 0"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChange(event, "image")}
            value={product.image}
            margin="0 0 16px 0"
            title="Url imagem"
            placeholder="Url imagem"
          />
          <InputMoney
            onChange={(event) => onChange(event, "price", true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            title="Categoria"
            margin="0 0 32px 0"
            defaultValue="Categoria"
            onChange={handleChange}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button onClick={handleInsertProduct} type="primary">
                Inserir produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
