// components/PatientDetails.js
import React from "react";

const PatientDetails = ({ label, value }) => {
  return (
    <p className="text-sm text-gray-600 mb-1">
      <strong>{label}:</strong> {value}
    </p>
  );
};

export default PatientDetails;
