import { createContext, useState } from "react";
import "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile
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
      const errorEmail = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(errorCode);
      toast.error(errorEmail);
      toast.error(credential);
    }
  };

  const createAccount = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const editProfile = async (name) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name
      });
      setUserData(userData);
    } catch (error) {
      return console.log(error);
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
        createAccount,
        editProfile,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
