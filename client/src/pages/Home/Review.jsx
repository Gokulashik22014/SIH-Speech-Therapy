import React from "react";
import ReviewChart from "./ReviewChart";
import User from "../../components/User";
import { useNavigate } from "react-router-dom";
const Review = () => {
  const navigate=useNavigate()
  return (
    <div className="flex w-full h-64 mt-12 rounded-md items-center space-x-3">
      <div className="w-1/3 h-72 overflow-y-auto scrollbar-custom p-4 bg-slate-200 rounded-md">
        {/* Custom scrollbar styles applied here */}
        <User />
        <User />
        <User />
      </div>
      <div className="w-2/3 flex flex-col justify-center items-start p-4 bg-slate-200 rounded-md">
        <div className="flex flex-row justify-between w-full">
          <h1 className="font-bold text-blue-400 uppercase text-xl ">Name</h1>
          <button className="bg-primary text-white  px-2 rounded-lg" onClick={()=>navigate("/patients")}>
            Get more info
          </button>
        </div>
        {/* Adjusted width to take more space */}
        <ReviewChart />
      </div>
    </div>
  );
};

export default Review;
