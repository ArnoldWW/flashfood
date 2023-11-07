import { createContext, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(1);
  const db = getFirestore();

  const getMenu = async () => {
    const products = [];
    try {
      const querySnapshot = await getDocs(collection(db, "menu"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const product = { id: doc.id, data: doc.data() };
        products.push(product);
      });
      setMenu(products);
      setLoading(2);
      console.log(menu);
    } catch (error) {
      console.error(error);
      setLoading(3);
    }
  };

  const getProductsByCategory = async (e) => {
    try {
      const products = [];
      const q = query(
        collection(db, "menu"),
        where("category", "==", e.target.value)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const product = { id: doc.id, data: doc.data() };
        products.push(product);
      });
      setMenu(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        loading,
        menu,
        category,
        getMenu,
        getProductsByCategory,
        setCategory
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
export { MenuProvider };
