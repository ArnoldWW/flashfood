import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <Logo />
      <p className="my-2">
        Pagina no encontrada,{" "}
        <Link className="link" to="/">
          volver al inicio.
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
