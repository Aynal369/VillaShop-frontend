import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useDatabase = () => {
  const [isClick, setIsClick] = useState(false);
  const [user, setUser] = useState({});
  const { users } = useAuth();

  /*  useEffect(() => {
    let subscribed = true;
    axios
      .get(`https://villa-shop-backend.vercel.app/app/v1/users?email=${users.email}`)
      .then((res) => {
        if (subscribed) {
          // console.log(res.data?.data);
          setUser(res.data?.data);
        }
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
    return () => (subscribed = false);
  }, [users.email]); */

  const buttonRefresh = () => {
    setIsClick(true);
    setTimeout(function () {
      setIsClick(false);
    }, 6000);
  };

  return { isClick, setIsClick, buttonRefresh, user };
};

export default useDatabase;
