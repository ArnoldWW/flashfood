import { createContext, useState } from "react";
import "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
    } else {
      // User is signed out
      setUserData(null);
    }
  });

  const logInWithGoogle = async () => {
    console.log("log In");
    try {
      const user = await signInWithPopup(auth, provider);
      toast.success("Sesion iniciada!");
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const logOut = async () => {
    const res = confirm("¿Deseas cerrar la sesion?");

    if (res) {
      try {
        await signOut(auth);
        toast.success("Sesion cerrada!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        logInWithGoogle,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
