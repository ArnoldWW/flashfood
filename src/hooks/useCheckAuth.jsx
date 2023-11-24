import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useCheckAuth = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      return navigate("/");
    }
  }, [userData]);
};

export default useCheckAuth;
