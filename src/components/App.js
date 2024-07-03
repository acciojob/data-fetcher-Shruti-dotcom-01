import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const api = "https://dummyjson.com/products";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        setData(d);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setErrorMessage(e.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred: {errorMessage}</p>}
      {!isLoading && !isError && data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {!isLoading && !isError && !data && <p>No data found</p>}
    </div>
  );
};

export default App;
