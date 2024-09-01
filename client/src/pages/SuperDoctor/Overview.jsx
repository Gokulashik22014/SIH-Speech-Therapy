import React from "react";
import Box from "../../components/Box.jsx";
import { IoIosAddCircle } from "react-icons/io";
const Overview = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="flex justify-between w-full">
        <Box
          img={"./images/therapy.png"}
          count={12}
          total={20}
          heading={"Pending Patients"}
        />
        <Box
          img={"./images/progress.png"}
          count={12}
          total={20}
          heading={"Your Students"}
        />
        {/* Schedule appoinment */}
        <div>
          <h1 className="text-slate-500 font-semibold mb-2">Book Sessions</h1>
          <div className="h-24 w-48 bg-slate-200 rounded-lg flex items-center justify-center">
            <button className="border px-6 py-4 border-dashed border-black rounded-xl hover:scale-105 hover:bg-slate-100">
              <IoIosAddCircle className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
