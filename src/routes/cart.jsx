import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import { useState } from "react";

const Cart = () => {
  const { cart, totalPay } = useContext(CartContext);
  const [open, setOpen] = useState(false);

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
        {cart.length > 0 && (
          <button className="btn my-2" onClick={() => setOpen(true)}>
            Realizar Pedido
          </button>
        )}
      </section>

      <Modal open={open} setOpen={setOpen}>
        <header className="mb-3">
          <h3 className="h3">Confirma tus datos para tu pedido.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            fuga.
          </p>
        </header>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-2 ">
            <input type="text" className="input w-full" placeholder="Nombre" />
            <input
              type="text"
              className="input w-full"
              placeholder="Apellido"
            />
          </div>
          <div>
            <input
              type="email"
              className="input w-full"
              placeholder="Correo Electronico"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>+57</span>
            <input
              type="tel"
              className="input flex-1"
              placeholder="Numero de contacto"
            />
          </div>

          <div>
            <input
              type="text"
              className="input w-full"
              placeholder="Direccion de entrega"
            />
          </div>

          <input type="submit" className="btn" value="confirmar pedido" />
        </form>
      </Modal>
    </>
  );
};

export default Cart;
