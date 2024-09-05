import React, { useEffect, useState } from "react";
import ReviewChart from "./ReviewChart";
import UserCard from "../../components/UserCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Review = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState();
  const getUserData = async () => {
    try {
      const username = localStorage.getItem("user");
      const response = await axios.get(
        `http://localhost:3000/api/doctor/getuser/${username}`
      );
      // console.log(response.data.result)
      setDoctor(response.data.result);
      console.log(doctor)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
    // console.log(patient)
  }, []);
  if (doctor && !doctor.supervisors) {
    return (
      <div className="flex h-72 justify-center items-center">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Get in touch with a supervisor
        </button>
      </div>
    );
  }
  return (
    <div className="flex w-full h-64 mt-12 rounded-md items-center space-x-3">
      <div className="w-1/3 h-72 overflow-y-auto scrollbar-custom p-4 bg-slate-200 rounded-md">
        {/* Custom scrollbar styles applied here */}
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className="w-2/3 flex flex-col justify-center items-start p-4 bg-slate-200 rounded-md">
        <div className="flex flex-row justify-between w-full">
          <h1 className="font-bold text-blue-400 uppercase text-xl ">Name</h1>
          <button
            className="bg-primary text-white  px-2 rounded-lg"
            onClick={() => navigate("/patients")}
          >
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
