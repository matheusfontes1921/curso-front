import Screen from "../../../shared/screen/Screen";
import { useOrder } from "../hooks/useOrder";
import { ColumnsType } from "antd/es/table";
import { CategoryType } from "../../../shared/types/CategoryType";
import { OrderType } from "../../../shared/types/OrderType";
import Table from "../../../shared/table/Table";
import { useNavigate } from "react-router-dom";
import { OrderRoutesEnum } from "../routes";
const columns: ColumnsType<OrderType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Data",
    dataIndex: "data",
    key: "data",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Usuário",
    dataIndex: "user",
    key: "user",
    render: (_, target) => <a>{target.user?.name}</a>,
  },
  {
    title: "Quantidade de produtos",
    dataIndex: "amountProducts",
    key: "amountProducts",
    render: (text) => <a>{text}</a>,
  },
];
const Order = () => {
  const navigate = useNavigate();
  const { orders } = useOrder();
  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "PEDIDOS",
        },
      ]}
    >
      <Table
        onRow={(record) => ({
          onClick: () => navigate(`${OrderRoutesEnum.ORDER_ID}/${record.id}`),
        })}
        columns={columns}
        dataSource={orders}
      />
    </Screen>
  );
};
export default Order;
