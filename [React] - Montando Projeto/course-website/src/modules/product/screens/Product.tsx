import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useEffect } from "react";
import useRequests from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/ProductType";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { ColumnsType } from "antd/es/table";
import Table from "../../../shared/table/Table";
import CategoryColumn from "../components/CategoryColumn";
import TooltipImage from "../components/TooltipImage";
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
    render: (text) => <a>(text)</a>,
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
    render: (text) => <a>(text)</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);
  return <Table columns={columns} dataSource={products} />;
};

export default Product;
