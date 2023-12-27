import gift from "../assets/homelander.gif";
function Wins({restartGame}) {

  const handleClick = () => {
    restartGame(true)
  }

  return (
    <div className="modal"> 
      <article className="modal__content">
        <p> Congratulations you win!! </p>
        <img src={gift} alt="homelander gift"></img>
        <button onClick={handleClick}>Restart Game</button>
      </article>
    </div>
  );
}

export default Wins;
