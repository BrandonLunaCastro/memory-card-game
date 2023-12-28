import logo from "../assets/the-boys-pngthe-boys-logo-png.png";
import { Tilt } from "react-tilt";

function Card({ name, url, id, receiveId }) {
  const handleClick = (e) => {
    receiveId(e.currentTarget.id);
  };

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <Tilt options={defaultOptions}>
      <article className="container__card" id={id} onClick={handleClick}>
        <article className="flip-card-front">
          <img src={url} alt={name}></img>
          <figcaption>{name}</figcaption>
        </article>
        <div className="flip-card-back">
          <img src={logo}></img>
        </div>
      </article>
    </Tilt>
  );
}

export default Card;
