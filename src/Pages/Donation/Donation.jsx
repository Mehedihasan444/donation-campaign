import { useEffect, useState } from "react";

import Donate_card from "../../Components/Donate_card/Donate_card";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow,setIsShow]=useState(false)
  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donations"));
    if (donations) {
      setDonation(donations);
    } else {
      // console.log("no data found")
      setNoFound("No Data Found!");
    }
  }, []);

  return (
    <div>
      
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div className="">
          <div className="md:max-w-2xl  lg:max-w-7xl mx-auto pt-16 md:pt-24 lg:grid lg:grid-cols-2 gap-5 ">
            {isShow?donation.map((donate) => (
              <Donate_card key={donate.Id} donate={donate}></Donate_card>
            )):
            
            donation.slice(0,4).map((donate) => (
              <Donate_card key={donate.Id} donate={donate}></Donate_card>
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
        {
            donation.length>4?<button className="px-5 py-2 text-white rounded-md bg-green-500" onClick={()=>setIsShow(!isShow)}>{isShow?"See less":"See All"}</button>:""
        }
      </div>
        </div>
      )}
      
    </div>
  );
};

export default Donation;
