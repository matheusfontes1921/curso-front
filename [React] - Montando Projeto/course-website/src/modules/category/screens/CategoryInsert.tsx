import Screen from "../../../shared/screen/Screen";
import { CategoryRoutesEnum } from "../routes";
import { LimitedContainer } from "../../login/components/styles/limited.style";
import Input from "../../../shared/input/input/Input";
import React from "react";
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from "../../login/components/styles/display.style";
import Button from "../../../shared/button/button/Button";
import { useInsertProduct } from "../../product/hooks/useInsertProduct";
import { ProductRoutesEnum } from "../../product/routes";
import { useNavigate } from "react-router-dom";
import { useInsertCategory } from "../hooks/useInsertCategory";

const CategoryInsert = () => {
  const navigate = useNavigate();
  const { name, disabledButton, insertCategory, loading, handleOnChangeName } = useInsertCategory();
  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };
  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "CATEGORIAS",
          navigateTo: CategoryRoutesEnum.CATEGORY,
        },
        {
          name: "INSERIR CATEGORIAS",
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={handleOnChangeName}
            margin="0 0 16px 0"
            title="Nome"
            placeholder="Nome"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={160}>
              <Button disabled={disabledButton} loading={loading} onClick={insertCategory} type="primary">
                Inserir categoria
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryInsert;
