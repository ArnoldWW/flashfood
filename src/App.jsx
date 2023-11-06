import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />

        <main className="container my-5">
          <Outlet />
        </main>

        <Footer />

        <Toaster position="top-right" reverseOrder={false} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
