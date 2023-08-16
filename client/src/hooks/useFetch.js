import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        console.log(process.env.Heroku + url);
        const res = await axios.get(process.env.Heroku + url);

        setData(res.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);

    try {
      const res = await axios.get(process.env.Heroku + url);

      setData(res.data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
