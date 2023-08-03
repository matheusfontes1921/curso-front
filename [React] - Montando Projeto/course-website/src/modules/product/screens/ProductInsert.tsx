import Screen from "../../../shared/screen/Screen";
import { ProductRoutesEnum } from "../routes";
import React from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import { ProductInsertContainer } from "../styles/productInsert.style";
import { LimitedContainer } from "../../login/components/styles/limited.style";
import Input from "../../../shared/input/input/Input";
import Button from "../../../shared/button/button/Button";
import Select from "../../../shared/input/select/Select";
import {
  DisplayFlex,
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from "../../login/components/styles/display.style";
import { useNavigate, useParams } from "react-router-dom";
import InputMoney from "../../../shared/input/inputMoney/InputMoney";
import { useInsertProduct } from "../hooks/useInsertProduct";
import { useCategory } from "../../category/hooks/useCategory";
import { ProductInsertTestIdEnum } from "../productInsertTestIdEnum";
import { Spin } from "antd";

const ProductInsert = () => {
  const {
    loading,
    disableButton,
    handleInsertProduct,
    onChangeInput,
    handleOnChangeSelect,
    product,
    handleOnClickCancel,
    loadingRequest,
    isEdit,
  } = useInsertProduct(productId);
  const { categories, setCategories } = useCategory();
  const { request } = useRequests();
  const { productId } = useParams<{ productId: string }>();

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
      {loadingRequest ? (
        <DisplayFlexJustifyCenter>
          <Spin size={"large"} />
        </DisplayFlexJustifyCenter>
      ) : (
        <DisplayFlexJustifyCenter data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER}>
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
              defaultValue={`${product.categoryId} || ""`}
              data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_SELECT}
              title="Categoria"
              margin="0 0 16px 0"
              onChange={handleOnChangeSelect}
              options={categories.map((category) => ({
                value: `${category.id}`,
                label: `${category.name}`,
              }))}
            />
            <DisplayFlex>
              <Input
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
                addonBefore={"Kg"}
                onChange={(event) => onChangeInput(event, "weight", true)}
                value={product.weight}
                margin="0 16px 16px 0"
                title="Peso"
                placeholder="Peso"
              />
              <Input
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
                addonBefore={"cm"}
                onChange={(event) => onChangeInput(event, "lenght", true)}
                value={product.lenght}
                margin="0 0 16px 0"
                title="Comprimento"
                placeholder="Comprimento"
              />
            </DisplayFlex>
            <DisplayFlex>
              <Input
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
                addonBefore={"cm"}
                onChange={(event) => onChangeInput(event, "height", true)}
                value={product.height}
                margin="0 16px 16px 0"
                title="Altura"
                placeholder="Altura"
              />
              <Input
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
                addonBefore={"cm"}
                onChange={(event) => onChangeInput(event, "width", true)}
                value={product.width}
                margin="0 0 16px 0"
                title="Largura"
                placeholder="Largura"
              />
            </DisplayFlex>
            <DisplayFlex>
              <Input
                data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE}
                addonBefore={"cm"}
                onChange={(event) => onChangeInput(event, "diameter", true)}
                value={product.diameter}
                margin="0 0 16px 0"
                title="Diâmetro"
                placeholder="Diâmetro"
              />
            </DisplayFlex>
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
                  {isEdit ? "Salvar" : "Inserir produto"}
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyRight>
          </LimitedContainer>
        </DisplayFlexJustifyCenter>
      )}
    </Screen>
  );
};

export default ProductInsert;
