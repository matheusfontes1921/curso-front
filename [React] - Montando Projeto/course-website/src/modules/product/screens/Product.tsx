import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useEffect, useState } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/ProductType";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { ColumnsType } from "antd/es/table";
import Table from "../../../shared/table/Table";
import CategoryColumn from "../components/CategoryColumn";
import TooltipImage from "../components/TooltipImage";
import { convertNumberToMoney } from "../../../shared/functions/money";
import Screen from "../../../shared/screen/Screen";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";
import { ListBreadcrumb } from "../../../shared/breadcrumb/Breadcrumb";
import {LimitedContainer} from "../../login/components/styles/limited.style";
import {DisplayFlexJustifyBetween} from "../../login/components/styles/display.style";
const { Search } = Input;
const columns: ColumnsType<ProductType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Categoria",
    dataIndex: "categoria",
    key: "categoria",
    render: (_, product) => <CategoryColumn category={product.category} />,
  },
  {
    title: "Preço",
    dataIndex: "preco",
    key: "preco",
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
];
const listBreadcrumb: ListBreadcrumb[] = [
  {
    name: "HOME",
  },
  {
    name: "PRODUTOS",
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
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
  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyBetween margin={"0 0 16px 0"}>
        <LimitedContainer width={240}>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>
      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
