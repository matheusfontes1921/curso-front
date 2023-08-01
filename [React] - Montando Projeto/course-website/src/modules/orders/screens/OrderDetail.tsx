import Screen from "../../../shared/screen/Screen";
import { Descriptions, Divider, Spin } from "antd";
import { DisplayFlexJustifyCenter } from "../../../shared/components/styles/display.styled";
import { convertNumberToMoney } from "../../../shared/functions/money";
import { OrderRoutesEnum } from "../routes";
import { useParams } from "react-router-dom";
import { useOrderDetail } from "../hooks/useOrderDetail";
import ListOrderProduct from "../components/ListOrderProduct";
const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);
  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "PEDIDOS",
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: "DETALHES DO PEDIDO",
        },
      ]}
    >
      {!order || loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <Descriptions title="Dados do usuário" bordered>
            <Descriptions.Item label="Nome">{order.user?.name}</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">{order.user?.phone}</Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {order.user?.cpf}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Preço">
              {convertNumberToMoney(order.payment?.price || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {convertNumberToMoney(order.payment?.discount || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final">
              {convertNumberToMoney(order.payment?.finalPrice || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo de pagamento" span={2}>
              {order.payment?.type}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={2}>
              {order.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Cidade">{order.address?.city?.name}</Descriptions.Item>
            <Descriptions.Item label="Estado">{order.address?.city?.state?.name}</Descriptions.Item>
            <Descriptions.Item label="Complemento">{order.address?.complement}</Descriptions.Item>
            <Descriptions.Item label="Número">{order.address?.numberAddress}</Descriptions.Item>
            <Descriptions.Item label="CEP" span={2}>
              {order.address?.cep}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <ListOrderProduct ordersProduct={order.ordersProduct} />
        </>
      )}
    </Screen>
  );
};
export default OrderDetail;
