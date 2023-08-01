import Screen from "../../../shared/screen/Screen";
import {useOrder} from "../hooks/useOrder";

const Order = () => {
    const {orders} = useOrder();
  return (
    <Screen>
        {orders.map((order) => {
            <div>{order.user}</div>
        })}
    </Screen>
  );
};
export default Order;
