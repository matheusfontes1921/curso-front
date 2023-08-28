import Screen from "../../../shared/screen/Screen";
import { useCategory } from "../hooks/useCategory";
import Table from "../../../shared/table/Table";
import { ColumnsType } from "antd/es/table";
import { CategoryType } from "../../../shared/types/CategoryType";
import { LimitedContainer } from "../../login/components/styles/limited.style";
import { Input, Modal } from "antd";
import Button from "../../../shared/button/button/Button";
import { useNavigate } from "react-router-dom";
import { CategoryRoutesEnum } from "../routes";
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from "../../login/components/styles/display.style";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
const { Search } = Input;

const Category = () => {
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
    {
      title: "Ações",
      dataIndex: "",
      width: 240,
      key: "x",
      render: (_, category) => (
        <LimitedContainer width={180}>
          <DisplayFlex>
            <LimitedContainer width={90}>
              <Button onClick={() => null} icon={<EditOutlined />}>
                Editar
              </Button>
            </LimitedContainer>
            {category.amountProducts <= 0 && (
              <Button
                danger
                onClick={() => handleOpenModalDelete(category.id)}
                icon={<DeleteOutlined />}
              >
                Deletar
              </Button>
            )}
          </DisplayFlex>
        </LimitedContainer>
      ),
    },
  ];
  const {
    categories,
    handleOnChangeSearch,
    handleOnClickCategory,
    handleCloseModalDelete,
    handleOpenModalDelete,
    openModalDelete,
    handleConfirmDeleteCategory,
  } = useCategory();
  const navigate = useNavigate();

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
      <Modal
        title={"Atenção"}
        open={openModalDelete}
        onOk={handleConfirmDeleteCategory}
        onCancel={handleCloseModalDelete}
        okText={"Sim"}
        cancelText={"Cancelar"}
      >
        {" "}
        Tem certeza que deseja excluir essa categoria?
      </Modal>
      <DisplayFlexJustifyBetween margin={"0 0 16px 0"}>
        <LimitedContainer width={240}>
          <Search placeholder="Buscar categoria" onSearch={handleOnChangeSearch} enterButton />
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
