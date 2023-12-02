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
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (category === "") {
      getMenu();
    }
  }, [loading]);

  const handleFilterByCategory = (e) => {
    setCategory(e.target.value);
    setQuery("");
    if (e.target.value === "") {
      getMenu();
    } else {
      getProductsByCategory(e);
    }
  };

  const handleFilterByName = (e) => {
    setQuery(e.target.value.trim());
    console.log(
      menu.filter((p) => p.name.toLowerCase().includes(e.target.value))
    );
  };

  if (loading === 1) {
    return <p>cargando menu...</p>;
  }

  return (
    <>
      <h1 className="h1 text-center">Nuestro Menú</h1>

      <div className="flex justify-start items-center gap-3">
        <section className="my-3">
          <select
            className="py-2 px-5 bg-white border border-gray-300 rounded-md"
            onChange={handleFilterByCategory}
            value={category}
          >
            <option value="">Todo el menú</option>
            <option value="ha">Hamburgesas</option>
            <option value="pi">Pizzas</option>
          </select>
        </section>
        <input
          type="text"
          className="input"
          placeholder="Busca por nombre"
          value={query}
          onChange={handleFilterByName}
        />
      </div>

      <section className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* {menu.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))} */}
          {menu
            .filter((p) =>
              p.name.toLowerCase().includes(query.toLocaleLowerCase())
            )
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
