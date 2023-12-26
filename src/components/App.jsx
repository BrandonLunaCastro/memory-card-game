import { useState, useEffect } from "react";
import Cards from "./Cards";
import Header from "./Header";
import { dataFetch } from "../services/dataFetch";
import Counter from "./Counter";

function App() {
  const [currentScore, setScore] = useState(0)
  const [bestScore, setBest] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    dataFetch().then((response) => {
      setData(response.results);
    });
  }, []);

  return (
    <>
      <Header text={"The Boys memory game"}/>
      <Counter current={currentScore} best={bestScore}/>
      <Cards data={data}/>
    </>
  ); 
}

export default App;