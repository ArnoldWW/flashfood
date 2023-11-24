import { useContext, useState } from "react";
import MyLink from "../components/MyLink";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useCheckAuth from "../hooks/useCheckAuth";

const Signup = () => {
  const { createAccount, editProfile } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const navigate = useNavigate();

  useCheckAuth();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, email, password, password2 } = userData;

    //validations
    const values = Object.values(userData);

    const empty = values.some((value) => value.trim() === "");

    if (empty) {
      return toast.error("Todos los campos son obligatorios.");
    }

    /* console.log(emailRegex.test(email.trim())); */

    if (!emailRegex.test(email.trim())) {
      return toast.error("Correo electronico no valido.");
    }

    if (password.trim() !== password2.trim()) {
      return toast.error("Las contraseñas no coinciden.");
    }

    //create account
    try {
      await createAccount(email.trim(), password.trim());
      await editProfile(name.trim());
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <h1 className="h1 text-center">Crear Cuenta</h1>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            name="name"
            className="input block w-full"
            placeholder="Nombre"
            value={userData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            name="email"
            className="input block w-full"
            placeholder="Correo electronico"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="input block w-full"
            placeholder="Contraseña"
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="password2"
            className="input block w-full"
            placeholder="Repite tu contraseña"
            value={userData.password2}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5">
          <button type="submit" className="btn">
            Crear cuenta
          </button>
        </div>
      </form>

      <div className="my-5 flex flex-col">
        <MyLink to="/login">¿Ya tienes cuenta? Inicia Sesion.</MyLink>
        <MyLink to="/">Volver a inicio.</MyLink>
      </div>
    </>
  );
};

export default Signup;
