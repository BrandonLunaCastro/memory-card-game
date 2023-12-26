import gift from "../assets/homelander.gif";
function Wins() {
  return (
    <div className="modal"> 
      <article className="modal__content">
        <p> Congratulations you win!! </p>
        <img src={gift} alt="homelander gift"></img>
        <button>Restart Game</button>
      </article>
    </div>
  );
}

export default Wins;
