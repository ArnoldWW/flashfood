import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";
import Modal from "../components/Modal";
import CartItem from "../components/CartItem";
import OrderContext from "../context/OrderContext";
import { generateId, generateIDWithOnlyNumbers } from "../helpers";
import MyLink from "../components/MyLink";

const Cart = () => {
  const { userData, logInWithGoogle } = useContext(AuthContext);
  const { cart, totalPay } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({
    number: "",
    address: ""
  });
  const navigate = useNavigate();

  /* if (userData) {
    console.log(userData);
  } else {
    console.log("no hay usuario");
  } */

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFieldEmpty = (field) => field.trim() === "";
    console.log(Object.values(order).some(isFieldEmpty));
    if (Object.values(order).some(isFieldEmpty)) {
      return toast.error("Todos los campos son obligatorios!");
    }

    //Generar una orden con ID unico
    const completeOrder = {
      id: generateId(),
      userId: userData.uid,
      orderNumber: generateIDWithOnlyNumbers(),
      status: "en camino",
      totalPay,
      cart: [...cart],
      ...order
    };

    //limpiar estados
    setOrder({
      number: "",
      address: ""
    });

    //cerrar modal
    setOpen(false);

    //Añadir una orden
    await addOrder(completeOrder);
    navigate("/order");
  };

  return (
    <>
      <h1 className="h1 text-center">
        Carrito ({cart.length} producto/s añadidos)
      </h1>

      <section className="flex flex-col gap-5">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <p className="h3 text-center">Tu carrito esta vacio.</p>
        )}
      </section>

      {cart.length > 0 && (
        <>
          <hr />
          <h3 className="h3 text-right my-5">Total a pagar: ${totalPay}</h3>
        </>
      )}
      {userData && cart.length > 0 && (
        <>
          <button className="btn" onClick={() => setOpen(true)}>
            Realizar Pedido
          </button>
        </>
      )}

      {!userData && cart.length > 0 && (
        <div className="flex flex-col gap-2">
          <button
            className="btn flex gap-2 justify-center items-center"
            onClick={logInWithGoogle}
          >
            <img src="/google.svg" className="w-4" />
            Iniciar sesion con Google
          </button>

          <MyLink to="/login">Iniciar sesion con correo y contraseña.</MyLink>
        </div>
      )}

      <Modal open={open} setOpen={setOpen}>
        <header className="mb-3">
          <h3 className="h3">Confirma tus datos para tu pedido.</h3>
          <p>
            Complete los datos para confirmar su pedido, para gestionar el pago
            nos estaremos contactando con usted al numero de contacto.
          </p>
          <p>
            El pago a realizar será de{" "}
            <span className="font-bold">${totalPay}.</span>
          </p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-2">
            <span>+57</span>
            <input
              type="tel"
              pattern="[1-9]{1}[0-9]{9}"
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
              placeholder="Direccion de entrega Ej. Calle 50 Sur #30"
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
