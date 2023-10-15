import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.ok && res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    } catch (err) {
      throw err;
    }
  }, [url]);

  return data;
};
