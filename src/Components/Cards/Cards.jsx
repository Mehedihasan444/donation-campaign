import Card from "../Card/Card";
import PropTypes from "prop-types";
const Cards = ({ cards, inputFieldData }) => {
  let temp;
  if (inputFieldData === "") {
    temp = cards;
  } else {
    let filteredCards = [];
    filteredCards = cards.filter((card) =>card.Category.toLowerCase().includes(inputFieldData)
    );
    temp=filteredCards
// console.log("from else ",temp)
  }

  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-20 mb-20 justify-center items-center">
      {
      temp.length ===0?"No data found!":temp.map((card) => (
        <Card key={card.Id} card={card}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  inputFieldData: PropTypes.string,
};
export default Cards;
