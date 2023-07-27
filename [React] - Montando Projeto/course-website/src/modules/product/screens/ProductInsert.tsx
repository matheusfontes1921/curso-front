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
import { useInsertProduct } from "../hooks/useInsertProduct";
import { useCategory } from "../../category/hooks/useCategory";
import { ProductInsertTestIdEnum } from "../productInsertTestIdEnum";

const ProductInsert = () => {
  const {
    loading,
    disableButton,
    handleInsertProduct,
    onChangeInput,
    handleOnChangeSelect,
    product,
  } = useInsertProduct();
  const { categories, setCategories } = useCategory();
  const { request } = useRequests();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
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
      <ProductInsertContainer data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER}>
        <LimitedContainer width={400}>
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME}
            onChange={(event) => onChangeInput(event, "name")}
            value={product.name}
            margin="0 0 16px 0"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
            onChange={(event) => onChangeInput(event, "image")}
            value={product.image}
            margin="0 0 16px 0"
            title="Url imagem"
            placeholder="Url imagem"
          />
          <InputMoney
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE}
            onChange={(event) => onChangeInput(event, "price", true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_SELECT}
            title="Categoria"
            margin="0 0 32px 0"
            defaultValue="Categoria"
            onChange={handleOnChangeSelect}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL}
                onClick={handleOnClickCancel}
              >
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT}
                loading={loading}
                disabled={disableButton}
                onClick={handleInsertProduct}
                type="primary"
              >
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
