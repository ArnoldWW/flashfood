import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import MenuContext from "../context/MenuContext";

const Menu = () => {
  const {
    loading,
    menu,
    category,
    getMenu,
    getProductsByCategory,
    setCategory
  } = useContext(MenuContext);

  useEffect(() => {
    if (category === "") {
      getMenu();
    }
  }, [loading]);

  const handleChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === "") {
      getMenu();
    } else {
      getProductsByCategory(e);
    }
  };

  if (loading === 1) {
    return <p>cargando menu...</p>;
  }

  return (
    <>
      <h1 className="h1 text-center">Nuestro Menú</h1>

      <section className="my-3">
        <select
          className="py-2 px-5 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
          value={category}
        >
          <option value="">Todos los productos</option>
          <option value="ha">Hamburgesas</option>
          <option value="pi">Pizzas</option>
        </select>
      </section>

      <section className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menu.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
