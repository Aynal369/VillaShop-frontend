import { useEffect, useState } from "react";
import firebaseInitialize from "../authentication/firebaseInitialize";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";

firebaseInitialize();

const useFirebase = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (isLoggedIn) {
        setIsLoggedIn(true);
        setUsers(user);
      } else {
        setIsLoggedIn(false);
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth, isLoggedIn]);
  const createNewUser = (fullName, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const email = user.email;
          const userData = {
            fullName,
            email,
          };
          clientSaveToDatabase(userData);
          toast.success("Successfully create a new account.");
          navigate("/login");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          toast.error("Sorry! This email address is already in use.");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const clientSaveToDatabase = (userData) => {
    axios
      .post("https://villa-shop-backend.vercel.app/app/v1/users", userData)
      .then((res) => {
        console.log(res.data?.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const userLogin = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setUsers(user);
          setIsLoggedIn(true);
          //  handleJsonWebToken(user.email);
          const destination = location.state?.from || "/";
          navigate(destination);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          toast.error("Wrong password. please try again or reset the password");
        } else if (errorCode === "auth/user-not-found") {
          toast.error("User not found. please sign up");
          navigate("/register");
        }
      })
      .finally(() => setIsLoading(false));
  };
  /*  const handleJsonWebToken = (email) => {
    axios
      .put(`https://villa-shop-backend.vercel.app/app/v1/users?email=${email}`)
      .then((res) => {})
      .catch((err) => {});
  }; */
  const handlePasswordResetEmail = (email, navigate, location) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        const destination = location.state?.from || "/";
        navigate(destination);
        toast.success(
          "Please check your email inbox or spam folder and reset your password."
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          toast.error("User not found. please sign up");
          navigate("/register");
        }
      });
  };
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
        setIsLoggedIn(false);
        localStorage.removeItem("accessToken");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    users,
    isLoggedIn,
    isLoading,
    createNewUser,
    userLogin,
    handlePasswordResetEmail,
    handleSignOut,
  };
};

export default useFirebase;
