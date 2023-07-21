import Screen from "../../../shared/screen/Screen";
import { ProductRoutesEnum } from "../routes";
import { ListBreadcrumb } from "../../../shared/breadcrumb/Breadcrumb";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_CATEGORIES, URL_PRODUCT } from "../../../shared/constants/urls";
import { LimitedContainer } from "../styles/productInsert.style";
import Input from "../../../shared/input/input/Input";
import Button from "../../../shared/button/button/Button";
import Select from "../../../shared/input/select/Select";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: "",
  });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    }
  }, []);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>, nameObject: string) => {
    setProduct({
      ...product,
      [nameObject]: event.target.value,
    });
  };
  const handleInsertProduct = () => {
    connectionAPIPost(URL_PRODUCT, product);
  };

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      price: Number(event.target.value),
    });
  };
  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
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
        <Input
          onChange={onChangePrice}
          value={product.price}
          margin="0 0 16px 0"
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
        <Button onClick={handleInsertProduct} type="primary">
          Inserir produto
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
