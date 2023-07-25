import Screen from "../../../shared/screen/Screen";
import { useCategory } from "../hooks/useCategory";
import Table from "../../../shared/table/Table";
import { ColumnsType } from "antd/es/table";
import { CategoryType } from "../../../shared/types/CategoryType";
import { LimitedContainer } from "../../login/components/styles/limited.style";
import { Input } from "antd";
import Button from "../../../shared/button/button/Button";
import { useNavigate } from "react-router-dom";
import { CategoryRoutesEnum } from "../routes";
import { DisplayFlexJustifyBetween } from "../../login/components/styles/display.style";
const { Search } = Input;
const columns: ColumnsType<CategoryType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Produtos",
    dataIndex: "amountProducts",
    key: "amountProducts",
    render: (text) => <a>{text}</a>,
  },
];
const Category = () => {
  const { categories } = useCategory();
  const navigate = useNavigate();
  const handleOnClickCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };
  const handleOnSearch = (value: string) => {
    console.log("teste");
  };
  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "CATEGORIAS",
        },
      ]}
    >
      <DisplayFlexJustifyBetween margin={"0 0 16px 0"}>
        <LimitedContainer width={240}>
          <Search placeholder="Buscar categoria" onSearch={handleOnSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={240}>
          <Button type={"primary"} onClick={handleOnClickCategory}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>
      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};
export default Category;
