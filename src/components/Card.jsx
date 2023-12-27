import logo from "../assets/the-boys-pngthe-boys-logo-png.png";
function Card({ name, url, id, receiveId }) {
  const handleClick = (e) => {
    receiveId(e.currentTarget.id);
  };

  return (
    <>
      <article className="container__card" id={id} onClick={handleClick}>
        <figure className="flip-card-front">
          <img src={url} alt={name}></img>
          <figcaption>{name}</figcaption>
        </figure>
      </article>
      <article>
        <figure className="flip-card-back">
          <img src={logo}></img>
        </figure>
      </article>
    </>
  );
}

export default Card;
