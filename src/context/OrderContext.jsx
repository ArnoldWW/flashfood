import { createContext, useContext, useState } from "react";
import "../firebase";
import {
  doc,
  getFirestore,
  setDoc,
  serverTimestamp,
  query,
  collection,
  where,
  getDocs,
  orderBy
} from "firebase/firestore";
import toast from "react-hot-toast";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const db = getFirestore();
  const { setCart } = useContext(CartContext);
  const { userData } = useContext(AuthContext);

  const addOrder = async (order) => {
    console.log("adding order...", order);

    //crear un registro en firebase
    try {
      await setDoc(doc(db, "orders", order.id), {
        ...order,
        date: serverTimestamp()
      });

      //Borrar el carrito y el localstorage
      setCart([]);
      localStorage.removeItem("cart");
      toast.success("Pedido realizado!");
    } catch (error) {
      toast.error("Error al hacer el pedidio.");
    }
  };

  const getOrders = async () => {
    if (!userData) return;

    try {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", userData.uid),
        orderBy("date", "desc")
      );

      const querySnapshot = await getDocs(q);
      let orders = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        orders.push(doc.data());
      });

      return orders;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider value={{ addOrder, getOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
export { OrderProvider };
