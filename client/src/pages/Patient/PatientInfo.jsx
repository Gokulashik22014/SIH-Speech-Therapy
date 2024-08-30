// components/PatientInfo.js
import React from "react";
import PatientDetails from "../../components/PathientDetails.jsx"

const PatientInfo = () => {
  // Sample patient data
  const patient = {
    name: "John Doe",
    id: "12345",
    age: 30,
    gender: "Male",
    dateOfBirth: "1993-01-01",
    address: "123 Elm Street, Springfield",
    phone: "+1 234 567 8900",
    email: "johndoe@example.com",
    insuranceProvider: "HealthCare Inc.",
    policyNumber: "ABC-123456",
    allergies: "None",
    medications: "None",
  };

  return (
    <div className="w-full max-w-md bg-slate-200 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mr-6">
          <img
            alt="Patient profile"
            src="/images/dp.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {patient.name}
          </h2>
          <PatientDetails label="ID" value={patient.id} />
          <PatientDetails label="Age" value={patient.age} />
          <PatientDetails label="Gender" value={patient.gender} />
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6 pt-4">
        <PatientDetails label="Date of Birth" value={patient.dateOfBirth} />
        <PatientDetails label="Address" value={patient.address} />
        <PatientDetails label="Phone" value={patient.phone} />
        <PatientDetails label="Email" value={patient.email} />
        <PatientDetails
          label="Insurance Provider"
          value={patient.insuranceProvider}
        />
        <PatientDetails label="Policy Number" value={patient.policyNumber} />
        <PatientDetails label="Allergies" value={patient.allergies} />
        <PatientDetails label="Medications" value={patient.medications} />
      </div>
    </div>
  );
};

export default PatientInfo;
