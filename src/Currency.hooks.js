import { useEffect, useState } from "react";

async function UseCurrencyHooks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cd04162305eb49ababf5d8b1849aaf30"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const currency = await response.json();
        console.log("Berhasil");
        setData(currency);
        console.log(currency);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return data;
}

export default UseCurrencyHooks;
