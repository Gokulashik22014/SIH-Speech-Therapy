import React from "react";
import Overview from "./Overview";
import Review from "./Review";

const Home = () => {
  console.log("Home is present")
  return (
    <div className="flex ml-7 px-6 w-full h-full">
      {/* center parts */}
      <div className="mt-7 w-5/6 py-12">
        <Overview/>
        <Review/>
      </div>
      {/* left part */}
      <div className="w-2/6 bg-yellow-300 ml-4">

      </div>
    </div>
  );
};

export default Home;
