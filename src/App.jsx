import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Header />

      <main className="container my-5">
        <Outlet />
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </CartProvider>
  );
}

export default App;
