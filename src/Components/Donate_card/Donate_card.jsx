import { Link } from "react-router-dom";
import PropTypes from 'prop-types';  
const Donate_card = ({ donate }) => {
//   console.log(donate);
  const { Id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg,Price } =
    donate;
  return (
    <div>
      <div className="rounded-md flex " style={{ backgroundColor: `${Card_bg}` }}>
        <div className="object-cover">
          <img src={Picture} alt="" className="w-full" />
        </div>
        <div className="p-5 rounded-md space-y-3">
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
           
          >
            {Title}
          </h3>
          <span className="font-bold block"  style={{ color: `${Text_button_bg}` }}>${Price}</span>
          <Link to={`/cards/${Id}`}><button className="px-5 mt-3 py-2 text-white rounded-md" style={{ backgroundColor: `${Text_button_bg}` }}>View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

Donate_card.propTypes = {
  donate:PropTypes.object.isRequired
 
};
export default Donate_card;
