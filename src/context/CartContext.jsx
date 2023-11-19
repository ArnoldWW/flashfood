import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(localStorageCart);
  const [totalPay, setTotalPay] = useState(0);

  useEffect(() => {
    const reduceCart = cart.reduce((accumulator, currentValue) => {
      console.log(accumulator, currentValue.price, currentValue.quantity);
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);

    setTotalPay(reduceCart);
  }, [cart]);

  const addToCart = (product) => {
    const { id } = product;

    //verificar si el producto ya esta en el carrito
    const duplicateItem = cart.find((item) => item.id === id);

    if (duplicateItem) {
      //obtener el carrito sin el item que esta duplicado.
      const { id } = duplicateItem;
      const updatedCart = cart.filter((item) => item.id !== id);

      //actualizar la cantidad el item duplicado
      let itemUpdated = {
        quantity: duplicateItem.quantity++,
        ...duplicateItem
      };

      //verificar si hay 1 o mas productos
      if (cart.length > 1) {
        setCart([itemUpdated, ...updatedCart]);
        localStorage.setItem(
          "cart",
          JSON.stringify([itemUpdated, ...updatedCart])
        );
      } else {
        setCart([itemUpdated]);
        localStorage.setItem("cart", JSON.stringify([itemUpdated]));
      }

      return toast.success(
        `${itemUpdated.quantity} unidades de la "${itemUpdated.name}"`
      );
    }

    //añadir producto nuevo al carrito con la cantidad
    setCart([...cart, { ...product, quantity: 1 }]);
    console.log(cart);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...product, quantity: 1 }])
    );
    toast.success("Añadido!");
  };

  const deleteCartItem = (id, name) => {
    const res = confirm(`¿deseas eliminar el producto "${name}" del carrito?`);

    if (res) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("¡Producto eliminado del carrito!");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPay,
        setCart,
        addToCart,
        deleteCartItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
