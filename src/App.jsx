import { Outlet } from "react-router-dom";
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
    </>
  );
}

export default App;
