import Card from "./Card";

function Cards({data, receiveId}) {
  return (
    <section className="container">
      {data.length !== 0 &&
        data.map((obj) => {
          return (
            <div key={obj.id}>
              <Card name={obj.name} url={obj.image} id={obj.id} className={"flip"} receiveId={receiveId}/>
            </div>
          ) 
        })}
    </section>
  );
}

export default Cards;
