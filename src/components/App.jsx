import { useState, useEffect } from "react";
import Cards from "./Cards";
import Header from "./Header";
import { dataFetch } from "../services/dataFetch";
import Counter from "./Counter";
import { verifyArray } from "../services/verifyArray";
import Wins from "./Wins";

const initialScore = 0;
const initialBestScore = 0;
const initialData = [];
const initialArrId = [];

function App() {
  const [currentScore, setScore] = useState(initialScore);
  const [bestScore, setBest] = useState(initialBestScore);
  const [data, setData] = useState(initialData);
  const [arrId, setId] = useState(initialArrId);

  useEffect(() => {
    dataFetch().then((response) => {
      const random = response.results.slice(0, 12);
      setData(random);
    });
  }, []);

  useEffect(() => {
    setData(() => data.sort((a, b) => Math.random() - 0.5));
  }, [arrId, data]);

  const receiveId = (value) => {
    if (!verifyArray(arrId, value)) {
      setId((prevState) => [...prevState, value]);
      setScore((prevScore) => prevScore + 1);
      setBest((prevBest) =>
        prevBest > currentScore ? prevBest : prevBest + 1
      );
    } else {
      setScore(0);
      setId([]);
    }
  };

  const restartGame = (value) => {
    if (value) {
      setScore(initialScore);
      setBest(initialBestScore);
      setId(initialArrId);
    }
  };

  return (
    <>
      {currentScore === 12 && bestScore === 12 && (
        <Wins restartGame={restartGame} />
      )}
      <Header text={"The Boys memory game"} />
      <Counter current={currentScore} best={bestScore} />
      <Cards data={data} receiveId={receiveId} />
    </>
  );
}

export default App;
