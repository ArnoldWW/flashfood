import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ item }) => {
  const { cart, deleteCartItem } = useContext(CartContext);
  const { id, name, price, img, quantity } = item;

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-5"
      key={id}
    >
      <div className="flex flex-col md:flex-row w-full justify-start items-center gap-5">
        <div className="w-[200px] flex justify-center items-center">
          <img src={img} />
        </div>
        <div className="w-full md:w-auto">
          <h2 className="h2">{name}</h2>
          <p className="text-sm">
            ${price} X {quantity} unidad/es
          </p>
          <p className="font-bold">Total: ${Number(price * quantity)}</p>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <button className="btn w-full" onClick={() => deleteCartItem(id, name)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
