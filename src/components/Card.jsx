import logo from "../assets/the-boys-pngthe-boys-logo-png.png";
function Card({ name, url, id, receiveId}) {
  const handleClick = (e) => {
    receiveId(e.currentTarget.id);
  };

  return (
    <>
      <article className="container__card" id={id} onClick={handleClick}>
        <article className="flip-card-front">
          <img src={url} alt={name}></img>
          <figcaption>{name}</figcaption>
        </article>
        <div className="flip-card-back">
          <img src={logo}></img>
        </div>
      </article>
    </>
  );
}

export default Card;
