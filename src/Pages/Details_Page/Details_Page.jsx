import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details_Page = () => {
  const { id } = useParams();
  const cardsData = useLoaderData();
  const [card, setCard] = useState({});

  useEffect(() => {
    const findCard = cardsData?.find((card) => card.Id == id);
    setCard(findCard);
  }, [id, cardsData]);
  const handleAddToDonation = (cardId) => {
    const addedDonationArray = [];
    const donations = JSON.parse(localStorage.getItem("donations"));
    if (!donations) {
      addedDonationArray.push(card);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal("Good job!", "You have donate successfully!", "success");
    } else {
      const isExits = donations.find((donation) => donation.Id === cardId);
      // console.log(isExits);
      if (!isExits) {
        addedDonationArray.push(...donations, card);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        swal("Good job!", "You have donate successfully!", "success");
      } else {
        
        swal("Already donate!", "You have already donate!", "warning");
      }
    }
  };
  return (
    <div className="max-w-[350px] md:max-w-2xl lg:max-w-7xl mx-auto pt-32 space-y-5 mb-20">
      <div className=" relative ">
        <img src={card.Picture} alt="" className="w-full" />
        <div className="absolute bottom-0 right-0 left-0 bg-[#00000085] h-28 flex items-center">
          <button
            className="text-white bg-red-600 rounded-md py-3 ml-5  px-4"
            onClick={() => handleAddToDonation(card.Id)} style={{
              backgroundColor: `${card.Text_button_bg}`
            }}
          >
            Donate ${card.Price}
          </button>
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold">{card.Title}</h1>
      <p className="text-justify">{card.Description}</p>
    </div>
  );
};

export default Details_Page;
