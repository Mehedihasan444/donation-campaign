import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const [inputFieldData, setInputFieldData] = useState("");

  const cards = useLoaderData();
  // console.log(cards)

  return (
    <div>
      <Banner setInputFieldData={setInputFieldData}></Banner>

      <Cards cards={cards} inputFieldData={inputFieldData}></Cards>
    </div>
  );
};

export default Home;
