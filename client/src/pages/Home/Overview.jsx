import React from "react";
const Box = ({ img, count, total, heading }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-slate-500 font-semibold">{heading}</h1>
      <div className="h-24 w-48 bg-slate-200 rounded-md px-2 py-2 flex items-center space-x-7">
        <div className="h-16 w-16 rounded-full bg-slate-300 flex items-center justify-center">
          <div className="h-9 w-9">
            <img src={img} alt="image" className="object-fit" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-zinc-900 text-2xl">{count}</span> /{" "}
            <span className="text-zinc-400">{total}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
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
          <h1 className="text-slate-500 font-semibold">This weeks data</h1>
          <div className="h-24 w-96 bg-red-500 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
