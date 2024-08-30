import React from "react";
import { FiSend } from "react-icons/fi";

// This component is used everywhere so fine tune it as much as possible

const User = ({ name, id, apptime,endtime,chat }) => {
  return (
    <div className={`flex items-center space-x-5 bg-blue-400 mt-2 rounded-full px-2 shadow-sm shadow-black ${chat||apptime?"justify-between":""}`}>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="./images/dp.jpg" />
        </div>
      </div>
      <div>
        <h1 className="text-md font-bold">Name</h1>
        <h1 className="text-sm text-white">Patient id</h1>
      </div>
      {apptime && <h1 className="font-semibold text-sm">{apptime}-{endtime}</h1>}
      {chat&&<FiSend className="text-2xl "/>}
    </div>
  );
};

export default User;
