
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const api = " https://dummyjson.com/products";

const App = () => {
  const[data, setdata] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const[isError, setIsError] = useState(false);

  useEffect(()=> {
    setIsError(false);
    setIsLoading(true);
    fetch(api)
     .then((res)=> res.json())
     .then((d) => {
       setData(d);
       setIsLoading(false);
    })
    .catch((e) => setIsError(e.message));
}, []);

return (
  <div>
    <h1>Data Fetched from API</h1>
    {isLoading ? <p>Loading...</p> : <p>An error occurred: {isError}</p>}
    <pre>{data && JSON.stringify(data)}</pre>
  </div>
);
};


export default App
