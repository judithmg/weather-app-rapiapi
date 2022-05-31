import axios, { AxiosRequestHeaders } from 'axios';
import { useEffect, useState } from 'react';

interface State<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

const useFetch = <T>(url: string, headers?: AxiosRequestHeaders): State<T> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url, { headers })
      .then(({ data }) => {
        setLoading(false);
        data && setData(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log('error');
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
