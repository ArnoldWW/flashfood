import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, totalPay } = useContext(CartContext);
  return (
    <>
      <h1 className="h1 text-center">
        Carrito ({cart.length} producto/s añadidos)
      </h1>

      <section className="flex flex-col gap-5 py-5 border-b">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <p className="text-center">Añade tu primer producto al carrito</p>
        )}
      </section>

      <section className="py-5 flex flex-col justify-center items-end">
        <h3 className="h3">Total a pagar: ${totalPay}</h3>
        {cart.length > 0 && <button className="btn my-2">Realizar Pago</button>}
      </section>
    </>
  );
};

export default Cart;
