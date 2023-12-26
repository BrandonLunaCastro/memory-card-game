function Card({name, url, id, receiveId}) {
  const handleClick = (e) => {
    receiveId(e.currentTarget.id) 
  }  
  
  return (
    <article className="container__card" id={id} onClick={handleClick} >
      <figure className="card__figure">
        <img src={url} alt={name}></img>
        <figcaption>{name}</figcaption>
      </figure>
    </article>
  )
}

export default Card;