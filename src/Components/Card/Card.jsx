import { Link } from "react-router-dom";
import PropTypes from 'prop-types';  
const Card = ({ card }) => {
  const { Id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg } =
    card;
  return (
    <div className="flex justify-center ">
      <Link to={`/cards/${Id}`}>
        <div className="rounded-md w-[305px] h-[322px]" style={{ backgroundColor: `${Card_bg}` }}>
          <div className="object-cover">
            <img src={Picture} alt="" className="w-full" />
          </div>
          <div className="p-5 rounded-md">
            <span
              className="rounded-md p-1 mt-2"
              style={{
                backgroundColor: `${Category_bg}`,
                color: `${Text_button_bg}`,
              }}
            >
              {Category}
            </span>
            <h3
              className="text-xl font-semibold mt-3"
              style={{ color: `${Text_button_bg}` }}
            >
              {Title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
Card.propTypes={
  card:PropTypes.object.isRequired
}
export default Card;
