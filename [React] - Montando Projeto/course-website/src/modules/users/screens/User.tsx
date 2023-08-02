import Screen from "../../../shared/screen/Screen";
import Table from "../../../shared/table/Table";
import { ColumnsType } from "antd/es/table";
import { OrderType } from "../../../shared/types/OrderType";
import { UserType } from "../../../shared/types/UserType";
import { useUser } from "../hooks/useUser";
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
    title: "Quantidade de produtos",
    dataIndex: "amountProducts",
    key: "amountProducts",
    render: (text) => <a>{text}</a>,
  },
];
const User = () => {
  const { users } = useUser();
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
      <Table columns={columns} />
    </Screen>
  );
};
export default User;
