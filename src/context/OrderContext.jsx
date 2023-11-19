import { createContext } from "react";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  return (
    <OrderContext.Provider value={{ name: "order context" }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
export { OrderProvider };
