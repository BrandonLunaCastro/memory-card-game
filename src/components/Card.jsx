function Card({name, url}) {
  return (
    <article className="container__card">
      <figure className="card__figure">
        <img src={url} alt={name}></img>
        <figcaption>{name}</figcaption>
      </figure>
    </article>
  )
}

export default Card;