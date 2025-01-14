import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null); // Initialize with `null`

  useEffect(() => {
    if (!currency) return; // Prevent unnecessary fetch calls

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Correct JSON parsing
      .then((res) => setData(res[currency]))
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData(null); // Handle fetch errors gracefully
      });
  }, [currency]);

  return data; // Return the fetched data
}

export default useCurrencyInfo;
