import React from "react";
import LineChart from "./LineChart.jsx";
import Box from "../../components/Box.jsx"
const Overview = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="flex justify-between w-full">
        <Box
          img={"./images/patient.png"}
          count={12}
          total={20}
          heading={"Today's Patients"}
        />
        <Box
          img={"./images/ranking.png"}
          count={12}
          total={20}
          heading={"Ranking"}
        />
        <div className="flex flex-col space-y-2">
          {/* <h1 className="text-slate-500 font-semibold">This weeks data</h1> */}
          <div className="h-24 w-96 rounded-md">
            {/* <LineChart/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
