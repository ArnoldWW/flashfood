import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import Logo from "./Logo";
import MyNavLink from "./MyNavLink";
import { Link } from "react-router-dom";

const Header = () => {
  const { userData, logInWithGoogle, logOut } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  console.log(userData);

  return (
    <header className="w-full sticky top-0 z-10 bg-white">
      <div className="flex flex-col justify-center items-center container py-5 gap-3 border-b">
        <Logo />

        <nav className="flex justify-between items-center w-full">
          <div className="flex gap-5 flex-1">
            <MyNavLink to="/">Inicio</MyNavLink>
            <MyNavLink to="/menu">Menú</MyNavLink>
            <MyNavLink to="/cart">
              Carrito <span className="font-bold">({cart.length})</span>
            </MyNavLink>
          </div>

          <div className="flex justify-between gap-2 items-center">
            {userData ? (
              <>
                <img src={userData.photoURL} className="w-5 rounded-full" />
                <p>{userData.displayName} / </p>
                <button className="btn w-auto" onClick={logOut}>
                  cerrar sesion
                </button>
              </>
            ) : (
              <button
                className="btn flex gap-2 justify-center items-center"
                onClick={logInWithGoogle}
              >
                <img src="/google.svg" className="w-4" />
                Iniciar sesion con Google
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
