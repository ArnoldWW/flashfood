import MyLink from "../components/MyLink";
import useCheckAuth from "../hooks/useCheckAuth";

const Login = () => {
  useCheckAuth();

  return (
    <>
      <h1 className="h1 text-center">Iniciar Sesion</h1>

      <form className="w-full">
        <div className="mb-2">
          <input
            type="email"
            className="input block w-full"
            placeholder="Correo electronico"
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            className="input block w-full"
            placeholder="Contraseña"
          />
        </div>

        <div className="mt-5">
          <button type="submit" className="btn">
            Iniciar Sesion
          </button>
        </div>
      </form>

      <div className="my-5">
        <MyLink to="/signup">¿No tienes cuenta? Crea una cuenta.</MyLink>
      </div>
    </>
  );
};

export default Login;
