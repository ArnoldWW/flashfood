import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./routes/home";
import Menu from "./routes/menu";
import Cart from "./routes/cart";
import NotFound from "./routes/NotFound";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import "./index.css";

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
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
