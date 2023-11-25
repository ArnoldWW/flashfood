import { useContext, useEffect, useState } from "react";
import OrderContext from "../context/OrderContext";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { userData } = useContext(AuthContext);
  const { getOrders } = useContext(OrderContext);
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      return navigate("/cart");
    }
  }, [userData]);

  useEffect(() => {
    if (userData) {
      const fetchOrders = async () => {
        const res = await getOrders(userData);
        setOrderList(res);
      };
      fetchOrders();
    }
  }, []);

  return (
    <>
      <h1 className="h1 text-center">Pedidos</h1>

      {orderList.length > 0 ? (
        orderList.map((order) => {
          return <p key={order.id}>{order.id}</p>;
        })
      ) : (
        <p>No hay pedidos</p>
      )}
    </>
  );
};

export default Orders;
