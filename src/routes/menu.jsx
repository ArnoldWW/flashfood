import { useContext } from "react";
import CartContext from "../context/CartContext";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const { MENU } = useContext(CartContext);

  return (
    <>
      <h1 className="h1 text-center">Nuestro Menú</h1>

      <section className="mt-5">
        <h2 className="h2">Hamburgesas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU.burgers.map((burger) => (
            <FoodCard food={burger} key={burger.id} />
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="h2">Pizzas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU.pizzas.map((pizza) => (
            <FoodCard food={pizza} key={pizza.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
