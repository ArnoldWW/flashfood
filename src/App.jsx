import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { MenuProvider } from "./context/MenuContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  console.log(import.meta.env.VITE_apikey);

  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <Header />

          <main className="container my-5">
            <Outlet />
          </main>

          <Footer />

          <Toaster position="top-right" reverseOrder={false} />
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
