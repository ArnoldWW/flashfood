import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import useCheckAuth from "../hooks/useCheckAuth";
import toast from "react-hot-toast";
import MyLink from "../components/MyLink";

const Login = () => {
  const { logIn, userData, logInWithGoogle } = useContext(AuthContext);
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  useCheckAuth();

  const handleChange = (e) => {
    console.log(e.target.name);
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, password } = userFormData;

    //validations
    const values = Object.values(userFormData);

    const empty = values.some((value) => value.trim() === "");
    if (empty) {
      return toast.error("Todos los campos son obligatorios.");
    }

    /* console.log(emailRegex.test(email.trim())); */
    if (!emailRegex.test(email.trim())) {
      return toast.error("Correo electronico no valido.");
    }

    //create account
    await logIn(email.trim(), password.trim());
    if (userData) {
      navigate("/");
    }
  };

  return (
    <>
      <h1 className="h1 text-center">Iniciar Sesion</h1>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            className="input block w-full"
            placeholder="Correo electronico"
            value={userFormData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="input block w-full"
            placeholder="Contraseña"
            value={userFormData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5">
          <button type="submit" className="btn">
            Iniciar Sesion
          </button>
        </div>
      </form>

      <div className="my-5 flex flex-col">
        <MyLink to="/signup">¿No tienes cuenta? Crea una cuenta.</MyLink>
        <MyLink to="/">Volver al inicio.</MyLink>
      </div>

      <hr className="my-5" />
      <button className="btn" onClick={logInWithGoogle}>
        Iniciar sesion con Google
      </button>
    </>
  );
};

export default Login;
