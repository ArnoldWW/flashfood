import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, name, ingredients, price, img } = product;

  const handleClickAdd = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-[250px] mx-auto">
        <img src={img} />
      </div>
      <div>
        <h3 className="h3">{name}</h3>
        <p className="mt-2 text-sm">{ingredients}</p>
        <p className="font-bold mt-2 text-sm">${price}</p>
      </div>
      <button className="btn" onClick={handleClickAdd}>
        Añadir
      </button>
    </div>
  );
};

export default ProductCard;
