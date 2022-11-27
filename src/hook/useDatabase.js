import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useDatabase = () => {
  const [isClick, setIsClick] = useState(false);
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { users } = useAuth();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/app/v1/users?email=${users?.email}`)
      .then((response) => {
        setClient(response.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [users?.email]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = () => {
    const url = "https://dummyjson.com/products";
    axios.get(url).then((res) => setProducts(res.data.products));
  };

  const buttonRefresh = () => {
    setIsClick(true);
    setTimeout(function () {
      setIsClick(false);
    }, 6000);
  };

  return {
    isClick,
    setIsClick,
    buttonRefresh,
    client,
    loading,
    error,
    products,
  };
};

export default useDatabase;
