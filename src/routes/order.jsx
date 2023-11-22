import { useContext, useEffect, useState } from "react";
import OrderContext from "../context/OrderContext";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { userData } = useContext(AuthContext);
  const { getOrders } = useContext(OrderContext);
  const [orders, setOrders] = useState([]);
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
        console.log(res);
        setOrders(res);
      };
      fetchOrders();
    }
  }, []);

  return (
    <>
      <h1 className="h1 text-center">Pedidos</h1>

      {orders.length > 0 ? (
        orders.map((order) => {
          return <p key={order.id}>{order.id}</p>;
        })
      ) : (
        <p>No hay pedidos</p>
      )}
    </>
  );
};

export default Order;
