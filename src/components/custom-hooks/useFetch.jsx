import React, { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const resp = await fetch(url, { ...options });
      console.log("resp; ", resp);
      if (!resp.ok) throw new Error(resp.statusText);
      setData(resp);
      setLoading(falst);
      setError(null);
    } catch (error) {
      setError("Error ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(0);
  }, [url]);

  return { data, loading, error };
}
