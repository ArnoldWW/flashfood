import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import Logo from "./Logo";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="w-full sticky top-0 z-10 bg-white">
      <div className="flex flex-col justify-center items-center container py-5 gap-3 border-b">
        <Logo />

        <nav className="flex justify-center gap-5 w-full">
          <Link to="/">Inicio</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart" className="relative">
            Carrito <span className="font-bold">({cart.length})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
