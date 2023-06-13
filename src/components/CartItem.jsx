import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ item }) => {
  const { cart, deleteCartItem } = useContext(CartContext);
  const { id, image, title, quantity, price } = item;

  return (
    <div className="flex justify-between items-center" key={id}>
      <div className="flex justify-start flex-1 -center gap-5">
        <div className="w-[200px]">
          <img src={image} />
        </div>
        <div>
          <h2 className="h2">{title}</h2>
          <p className="text-sm">
            ${price} X {quantity} unidad/es
          </p>
          <p className="font-bold">Total: ${Number(price * quantity)}</p>
        </div>
      </div>
      <div>
        <button className="btn" onClick={() => deleteCartItem(id, title)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
