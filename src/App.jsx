import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Header />

      <main className="container my-5">
        <Outlet />
      </main>

      <footer className="container border-t py-5 text-center">
        <p>Todos los derechos reservados &copy; FlashFood.</p>
      </footer>

      <Toaster />
    </CartProvider>
  );
}

export default App;
