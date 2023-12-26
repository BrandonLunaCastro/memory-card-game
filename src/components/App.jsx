import { useState, useEffect } from "react";
import Cards from "./Cards";
import Header from "./Header";
import { dataFetch } from "../services/dataFetch";
import Counter from "./Counter";
import { verifyArray } from "../services/verifyArray";
import Wins from "./Wins";

function App() {
  const [currentScore, setScore] = useState(0);
  const [bestScore, setBest] = useState(0);
  const [data, setData] = useState([]);
  const [arrId, setId] = useState([]);

  useEffect(() => {
    dataFetch().then((response) => {
      const random = response.results
        .slice(0, 12);
      setData(random);
    });
  }, []);

  useEffect(() => {
    setData(() => data.sort((a, b) => Math.random() - 0.5))
  }, [arrId, data])

  const receiveId = (value) => {
    if ( !verifyArray(arrId,value) ) {
      setId(prevState => [...prevState,value]);
      setScore(prevScore => prevScore + 1);
      setBest(prevBest => prevBest > currentScore 
          ?  prevBest
          : prevBest + 1
      )
    } else {
      setScore(0);
      setId([]);
    }
  }

  return (
    <>
      <Wins />
      <Header text={"The Boys memory game"} />
      <Counter current={currentScore} best={bestScore} />
      <Cards data={data} receiveId={receiveId}/>
    </>
  );
}

export default App;
