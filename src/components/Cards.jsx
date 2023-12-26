import Card from "./Card";

function Cards({data, receiveId}) {
  return (
    <section className="container">
      {data.length !== 0 &&
        data.map((obj) => {
          return <Card name={obj.name} url={obj.image} key={obj.id} id={obj.id} receiveId={receiveId}/>;
        })}
    </section>
  );
}

export default Cards;
