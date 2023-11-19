import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="container my-5">
        <Outlet />
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
