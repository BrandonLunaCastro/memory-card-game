
import Card from "./Card";

function Cards({data}) {
  return (
    <section className="container">
      {data.length !== 0 &&
        data.slice(0, 12).map((obj) => {
          return <Card name={obj.name} url={obj.image} key={obj.id} />;
        })}
    </section>
  );
}

export default Cards;
