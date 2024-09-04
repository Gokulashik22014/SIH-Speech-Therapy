import React, { useState } from "react";
// import ReviewChart from "./ReviewChart";
import SessionCard from "../../components/SessionCard";
import { useNavigate } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard";
const Review = () => {
  const navigate = useNavigate();
  const [isPresent,setIsPresent]=useState(false)
  return (
    <div className="flex w-full h-64 mt-12 rounded-md items-center space-x-3">
      <div className="w-1/3 h-72 overflow-y-auto scrollbar-custom p-4 bg-slate-200 rounded-md">
        {/* Custom scrollbar styles applied here */}
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
      </div>
      <div className="w-2/3 h-72 flex flex-col items-start p-4 bg-slate-200 rounded-md">
        <div className="flex flex-row justify-between w-full">
          <h1 className="font-bold text-blue-400 uppercase text-xl ">Name</h1>
          <button
            className="bg-primary text-white  px-2 rounded-lg"
            onClick={() => navigate("/patients")}
          >
            Get more info
          </button>
        </div>
        <div>
          <DetailsCard label="Doctor Name" value={"Name"} />
          <DetailsCard label="Date" value={"01.09.2024"} />
          <DetailsCard label="Time" value={"10:00Am-11:00Am"} />
          <DetailsCard label="Summary" />
          <div>
            <h1>
              Hello! I'm Dr. Jeager, a dedicated therapy supervisor with over 13
              years of experience in the mental health field. I specialize in
              providing guidance and support to therapists, ensuring
              high-quality care for clients and fostering a collaborative
              environment for professional growth.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
