import { dataFetch } from "../services/dataFetch";
function Cards() {
  dataFetch().then(res => console.log(res));
  return (
    <section className="container">                           
    
    </section>
  );
}

export default Cards;