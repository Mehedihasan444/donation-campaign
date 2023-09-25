import Card from "../Card/Card";

const Cards = ({ cards }) => {
  //  const {}=data;
  return (
    <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-20 mb-20">
      {cards?.map((card) => (
        <Card key={card.Id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
