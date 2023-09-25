import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details_Page = () => {
    const { id } = useParams();
    const cardsData = useLoaderData();
    const [card, setCard] = useState({});

  useEffect(() => {
    const findCard = cardsData?.find((card) => card.Id == id);
    setCard(findCard);
  }, [id, cardsData]);
 const handleAddToDonation=()=>{
localStorage.setItem("")
  }
  return (
    <div className="max-w-7xl mx-auto pt-32 space-y-5 mb-20">
      <div className=" relative ">
        <img src={card.Picture} alt="" className="w-full" />
        <div className="absolute bottom-0 right-0 left-0 bg-[#00000085] h-28 flex items-center">
            <button className="text-white bg-red-600 rounded-md py-3 ml-5  px-4" onClick={handleAddToDonation}>Donate ${card.Price}</button>
        </div>
      </div>
      <h1 className="text-5xl font-bold">{card.Title}</h1>
      <p className="text-justify">{card.Description}</p>
    </div>
  );
};

export default Details_Page;
