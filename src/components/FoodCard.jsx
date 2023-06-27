import { useContext } from "react";
import CartContext from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useContext(CartContext);
  const { id, type, image, title, ingredients, price } = food;

  const handleClickAdd = () => {
    addToCart(id, type);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-[250px] mx-auto">
        <img src={image} />
      </div>
      <div>
        <h3 className="h3">{title}</h3>
        <p className="mt-2 text-sm">{ingredients}</p>
        <p className="font-bold mt-2 text-sm">${price}</p>
      </div>
      <button className="btn" onClick={handleClickAdd}>
        Añadir
      </button>
    </div>
  );
};

export default FoodCard;
