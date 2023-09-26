import PropTypes from "prop-types";
import "./Banner.css";
const Banner = ({setInputFieldData}) => {

  const handleInputField = () => {
    const value = document.getElementById("default-search");
    const textValue = value.value;
    console.log();
    setInputFieldData(textValue.toLowerCase())
  
  };

  return (
    <div className="h-screen text-center backgroundImage bg-overlay flex flex-col justify-center items-center  ">
      <div className="absolute">
        <h1 className="md:text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>
        <section className="max-w-7xl mx-auto mt-10 w-[80%]">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Search here...."
              required
            />
            <button
              onClick={handleInputField}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A] hover:bg-[#e00d14] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Search
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
Banner.propTypes={
  setInputFieldData:PropTypes.func.isRequired,
}
export default Banner;
