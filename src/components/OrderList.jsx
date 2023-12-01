import { useContext, useEffect, useState } from "react";
import OrderContext from "../context/OrderContext";
import Order from "./Order";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getOrders } = useContext(OrderContext);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getOrders();
      setOrders(res);
      setLoading(false);
      console.log(orders);
    };
    fetchOrders();
  }, [loading]);

  if (loading) {
    return <h2 className="h2 text-center">cargando...</h2>;
  }

  if (orders?.length === 0) {
    return (
      <h2 className="h2 text-center">Aún no has realizado ningun pedido</h2>
    );
  }

  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
