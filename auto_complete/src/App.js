import { useState, useEffect, useCallback } from "react";
import "./index.css";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = useCallback(async () => {
    if (cache[input]) {
      console.log("cached");
      setResults(cache[input]);
      return;
    }
    console.log("API");
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    const data = await response.json();

    setResults(data?.recipes);
    setCache((prevState) => ({ ...prevState, [input]: data?.recipes }));
  }, [input, cache]);

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input, fetchData]);

  return (
    <div className="App">
      <h1>Auto Complete </h1>
      <div className="container">
        <input
          type="text"
          placeholder="Searching"
          value={input}
          className="search_input"
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => setShow(false)}
          onFocus={() => setShow(true)}
        />
      </div>
      {show && (
        <div className="results">
          {results.map((result) => {
            return <span key={result.id}>{result.name}</span>;
          })}
        </div>
      )}
    </div>
  );
}
