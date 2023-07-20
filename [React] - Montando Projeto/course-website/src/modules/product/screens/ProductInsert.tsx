import Screen from "../../../shared/screen/Screen";
import { ProductRoutesEnum } from "../routes";
import { ListBreadcrumb } from "../../../shared/breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_CATEGORIES } from "../../../shared/constants/urls";
import { LimitedContainer } from "../styles/productInsert.style";
import Input from "../../../shared/input/input/Input";
import Button from "../../../shared/button/button/Button";
import { Select } from "antd";

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    }
  }, []);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
      <LimitedContainer>
        <Input margin="0 0 16px 0" title="Nome" placeholder="Nome" />
        <Input margin="0 0 16px 0" title="Url imagem" placeholder="Url imagem" />
        <Input margin="0 0 16px 0" title="Preço" placeholder="Preço" />
        <Input margin="0 0 16px 0" title="Categoria" />
        <Select
          defaultValue="Categoria"
          onChange={handleChange}
          style={{ width: "100%" }}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button type="primary">Inserir produto</Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
