import Card from "./Card";

function Cards({ data, receiveId }) {
  return (
    <section className="container">
      {data.length !== 0 &&
        data.map((obj) => {
          return (
            <Card
              key={obj.id}
              name={obj.name}
              url={obj.image}
              id={obj.id}
              className={"flip"}
              receiveId={receiveId}
            />
          );
        })}
    </section>
  );
}

export default Cards;
