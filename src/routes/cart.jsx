import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";
import Modal from "../components/Modal";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { userData, logInWithGoogle } = useContext(AuthContext);
  const { cart, totalPay, addOrder } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    lastname: "",
    email: "",
    number: "",
    address: ""
  });

  if (userData) {
    console.log(userData);
  } else {
    console.log("no hay usuario");
  }

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFieldEmpty = (field) => field.trim() === "";

    if (Object.values(order).some(isFieldEmpty)) {
      return toast.error("Todos los campos son obligatorios!");
    }

    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(order.email)) {
      return toast.error("Debes colocar un email valido!");
    }

    setOpen(false);
    addOrder();
  };

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
        {userData && cart.length > 0 && (
          <button className="btn my-2" onClick={() => setOpen(true)}>
            Realizar Pedido
          </button>
        )}

        {!userData && cart.length > 0 && (
          <button
            className="btn flex gap-2 justify-center items-center"
            onClick={logInWithGoogle}
          >
            <img src="/google.svg" className="w-4" />
            Iniciar sesion con Google
          </button>
        )}
      </section>

      <Modal open={open} setOpen={setOpen}>
        <header className="mb-3">
          <h3 className="h3">Confirma tus datos para tu pedido.</h3>
          <p>
            Complete los datos para confirmar su pedido, para gestionar el pago
            nos estaremos contactando con usted.
          </p>
          <p>
            El pago a realizar será de{" "}
            <span className="font-bold">${totalPay}.</span>
          </p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-2 ">
            <input
              type="text"
              className="input w-full"
              placeholder="Nombre"
              name="name"
              value={order.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="input w-full"
              placeholder="Apellido"
              name="lastname"
              value={order.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              className="input w-full"
              placeholder="Correo Electronico"
              name="email"
              value={order.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>+57</span>
            <input
              type="tel"
              className="input flex-1"
              placeholder="Numero de contacto"
              name="number"
              value={order.number}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              className="input w-full"
              placeholder="Direccion de entrega"
              name="address"
              value={order.address}
              onChange={handleChange}
            />
          </div>

          {userData && (
            <input type="submit" className="btn" value="confirmar pedido" />
          )}
        </form>
      </Modal>
    </>
  );
};

export default Cart;
