import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import OrderList from "../components/OrderList";

const Orders = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      return navigate("/cart");
    }
  }, [userData]);

  return (
    <>
      <h1 className="h1 text-center">Pedidos</h1>

      <OrderList />
    </>
  );
};

export default Orders;
