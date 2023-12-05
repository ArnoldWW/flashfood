import { useContext, useState } from "react";
import MyLink from "../components/MyLink";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useCheckAuth from "../hooks/useCheckAuth";

const Signup = () => {
  const { userData, createAccount, editProfile } = useContext(AuthContext);
  const [userFormData, setUserFomrData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const navigate = useNavigate();

  useCheckAuth();

  const handleChange = (e) => {
    setUserFomrData({
      ...userFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, email, password, password2 } = userFormData;

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

    if (password.trim() !== password2.trim()) {
      return toast.error("Las contraseñas no coinciden.");
    }

    if (password.trim().length < 6 || password2.trim().length < 6) {
      return toast.error("La contraseña debe ser de al menos 6 caracteres.");
    }

    //create account
    await createAccount(name.trim(), email.trim(), password.trim());
    if (userData) {
      navigate("/");
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
            value={userFormData.name}
            onChange={handleChange}
          />
        </div>

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

        <div className="mb-2">
          <input
            type="password"
            name="password2"
            className="input block w-full"
            placeholder="Repite tu contraseña"
            value={userFormData.password2}
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
