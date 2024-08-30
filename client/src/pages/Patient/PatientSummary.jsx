import React from "react";
import PatientInfo from "./PatientInfo";
import VideoSummary from "./VideoSummary";

const PatientSummary = () => {
  // Sample patient data

  return (
    <div className="h-full py-12 px-6 flex">
      {/* Patient Info Card */}
      <PatientInfo/>
      <VideoSummary/>
    </div>
  );
};

export default PatientSummary;
