import { useEffect, useState } from "react";

import Donate_card from "../../Components/Donate_card/Donate_card";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donations"));
    if (donations) {
      setDonation(donations);
    } else {
      // console.log("no data found")
      setNoFound("No Data Found!");
    }
  }, []);


  if (donation.length>4) {
    donation.slice(0,4)
  }
  return (
    <div>
      
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div className="">
          <div className="max-w-7xl mx-auto pt-20 grid grid-cols-2 gap-5 ">
            {donation.map((donate) => (
              <Donate_card key={donate.Id} donate={donate}></Donate_card>
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
        <button className="px-5 py-2 text-white rounded-md bg-green-500">See All</button>
      </div>
        </div>
      )}
      
    </div>
  );
};

export default Donation;
