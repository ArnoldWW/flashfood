import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const CartContext = createContext();

/* type 1 - burger
  type 2 - pizza
*/
const MENU = {
  burgers: [
    {
      id: 1,
      type: 1,
      image: "/hamburgers/1.png",
      title: "whopper",
      ingredients:
        "pan con ajonjolí, carne de res, tomates, lechuga, pepinillos, cebollas en rodajas y mayonesa",
      price: 10
    },
    {
      id: 2,
      type: 1,
      image: "/hamburgers/2.png",
      title: "Bacon King",
      ingredients:
        "pan con ajonjolí, carnes de res,tocineta, queso americano, ketchup y cremosa mayonesa.",
      price: 15
    },
    {
      id: 3,
      type: 1,
      image: "/hamburgers/3.png",
      title: "Clasica",
      ingredients:
        "pan, carne de res, lechuga, queso, tomate, cebolla y salsas.",
      price: 8
    },
    {
      id: 4,
      type: 1,
      image: "/hamburgers/4.png",
      title: "Crispy Chicken",
      ingredients: "pan, pollo crujiente,lechuga, tomate y mayonesa.",
      price: 10
    },
    {
      id: 5,
      type: 1,
      image: "/hamburgers/5.png",
      title: "King Chicken",
      ingredients: "pan con ajonjolí, pollo crujiente,lechuga y mayonesa.",
      price: 12
    },
    ,
    {
      id: 6,
      type: 1,
      image: "/hamburgers/6-combo.png",
      title: "King jr Hamburgesa",
      ingredients:
        "hamburgesa(pan, carne, queso, pepinillos, salsas), papas y jugo en caja.",
      price: 18
    }
  ],
  pizzas: [
    {
      id: 7,
      type: 2,
      image: "/pizzas/1.png",
      title: "Pizza doble queso",
      ingredients: "Salsa de tomate, queso mozzarella",
      price: 8
    },
    {
      id: 8,
      type: 2,
      image: "/pizzas/2.png",
      title: "pizza peperoni",
      ingredients: "salsa tomate, queso, peperoni",
      price: 10
    },
    {
      id: 9,
      type: 2,
      image: "/pizzas/3.png",
      title: "pizza mixta",
      ingredients:
        "peperoni, salchicha italiana, champiñones, cebolla y pimenton verde",
      price: 15
    },
    {
      id: 10,
      type: 2,
      image: "/pizzas/4.png",
      title: "pizza hula hawaiian",
      ingredients: "salsa tomate, queso,jamón y piña",
      price: 8
    },
    {
      id: 11,
      type: 2,
      image: "/pizzas/5.png",
      title: "Combo pizza completo",
      ingredients: "pizza peperoni, gaseosa 1.5 Litros, 5 palitos de queso",
      price: 20
    }
  ]
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPay, setTotalPay] = useState(0);
  const db = getFirestore();

  useEffect(() => {
    const reduceCart = cart.reduce((accumulator, currentValue) => {
      console.log(accumulator, currentValue.price, currentValue.quantity);
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);

    setTotalPay(reduceCart);
  }, [cart]);

  const addToCart = (id, type) => {
    let itemToAdd = {};
    //verificar el tipo de comida a añadir
    type === 1
      ? (itemToAdd = MENU.burgers.filter((burger) => burger.id === id)[0])
      : (itemToAdd = MENU.pizzas.filter((pizza) => pizza.id === id)[0]);

    //verificar si el producto ya esta en el carrito
    const duplicateItem = cart.find((item) => item.id === itemToAdd.id);

    if (duplicateItem) {
      const { id } = duplicateItem;
      const updatedCart = cart.filter((item) => item.id !== id);

      let itemUpdated = {
        quantity: duplicateItem.quantity++,
        ...duplicateItem
      };

      if (cart.length > 1) {
        setCart([itemUpdated, ...updatedCart]);
      } else {
        setCart([itemUpdated]);
      }

      return toast.success(
        `${itemUpdated.quantity} unidades de la "${itemUpdated.title}"`
      );
    }

    //Añadir cuando es el producto no se encuentra en el carrito
    setCart([{ ...itemToAdd, quantity: 1, total: itemToAdd.price }, ...cart]);
    toast.success(`¡Añadiste la "${itemToAdd.title}"!`);
  };

  const deleteCartItem = (id, title) => {
    const res = confirm(`¿deseas eliminar el producto "${title}" del carrito?`);

    if (res) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      toast.success("¡Producto eliminado del carrito!");
    }
  };

  const addOrder = () => {
    toast.success("Pedido realizado.");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPay,
        setCart,
        addToCart,
        deleteCartItem,
        addOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
