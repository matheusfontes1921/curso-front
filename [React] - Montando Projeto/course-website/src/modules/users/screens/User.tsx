import Screen from "../../../shared/screen/Screen";
import Table from "../../../shared/table/Table";
import { ColumnsType } from "antd/es/table";
import { Input} from "antd";
import { UserType } from "../../../shared/types/UserType";
import { useUser } from "../hooks/useUser";
import { insertMaskForPhone } from "../../../shared/functions/phone";
import { inserMaskForCpf } from "../../../shared/functions/cpf";
import {DisplayFlexJustifyBetween, DisplayFlexJustifyCenter} from "../../login/components/styles/display.style";
import { Spin } from "antd";
import {LimitedContainer} from "../../login/components/styles/limited.style";
import Button from "../../../shared/button/button/Button";
const { Search } = Input;
const columns: ColumnsType<UserType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Telefone",
    dataIndex: "telefone",
    key: "telefone",
    render: (text) => <a>{insertMaskForPhone(text)}</a>,
  },
  {
    title: "CPF",
    dataIndex: "cpf",
    key: "cpf",
    render: (text) => <a>{inserMaskForCpf(text)}</a>,
  },
];
const User = () => {
  const { users, loading, handleOnChangeSearch } = useUser();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "USUÁRIOS",
        },
      ]}
    >
      {loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size={"large"} />
        </DisplayFlexJustifyCenter>
      ) : (
          <>
            <DisplayFlexJustifyBetween margin={"0 0 16px 0"}>
              <LimitedContainer width={240}>
                <Search placeholder={"Buscar usuário"} onChange={handleOnChangeSearch} enterButton />
              </LimitedContainer>
              <LimitedContainer width={120}>
                <Button type={"primary"}>
                  Inserir
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyBetween>
            <Table columns={columns} dataSource={users} />
          </>
      )}
    </Screen>
  );
};
export default User;
