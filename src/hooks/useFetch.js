import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/blogs?populate=*');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
