import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);
  const [start, setStart] = useState(0);
  const [next, setNext] = useState(10);

  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    fetchData();
    setRes(data.slice(start, next));
  }, []);

  const onPrevClick = () => {
    setStart(start - 10);
    setNext(next - 10);
    let x = data.slice(start, next);
    setRes(x);
  };
  const onNextClick = () => {
    setStart(start + 10);
    setNext(next + 10);
    let x = data.slice(start, next);
    setRes(x);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {res.map((ele) => {
        return <div key={ele.id}>{ele.id}</div>;
      })}

      <button onClick={onPrevClick}>Prev</button>
      <button  onClick={onNextClick}>Next</button>
    </div>
  );
}
