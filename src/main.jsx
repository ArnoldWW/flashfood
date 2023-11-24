import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { MenuProvider } from "./context/MenuContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { Toaster } from "react-hot-toast";
import Home from "./routes/home";
import Menu from "./routes/menu";
import Cart from "./routes/cart";
import NotFound from "./routes/NotFound";
import Order from "./routes/order";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import Login from "./routes/login";
import Signup from "./routes/signup";
import AuthLayout from "./layouts/AuthLayout";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Page not found!</p>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/menu",
        element: <Menu />
      }
    ]
  }
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<AuthLayout />} errorElement={<NotFound />}>
        <Route index element={<Login />} />
      </Route>
      <Route
        path="/signup"
        element={<AuthLayout />}
        errorElement={<NotFound />}
      >
        <Route index element={<Signup />} />
      </Route>
      <Route path="/" element={<App />} errorElement={<NotFound />}>
        <Route>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <OrderProvider>
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
          </OrderProvider>
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  </React.StrictMode>
);
