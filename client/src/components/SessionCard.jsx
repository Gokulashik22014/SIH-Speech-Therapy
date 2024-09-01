import React from "react";
import { FaDownload } from "react-icons/fa6";
const SessionCard = ({ name, docName, isDownload }) => {
  return (
    <div className={`flex space-x-5 bg-blue-300 p-1 rounded-lg mb-2 ${isDownload&&"justify-between"}`}>
      <div className="h-12 w-12 rounded-md bg-slate-400 flex justify-center items-center">
        <img
          src="/images/patient.png"
          alt=""
          className="h-10 w-10 rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-white font-bold">Session Name</h1>
        {!isDownload&& <span className="text-slate-500 text-sm">Doctor Name</span>}
      </div>
      {/* download option */}
      {isDownload && (
        <div className="flex justify-center items-center btn">
          <button>
            <FaDownload />
          </button>
        </div>
      )}
    </div>
  );
};

export default SessionCard;
