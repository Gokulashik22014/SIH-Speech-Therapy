// components/PatientInfo.js
import React from "react";
import DetailsCard from "../../components/DetailsCard.jsx"


// we are using a static data so need to fix this thing that is fetch the data and modify accordingly

// uselocations and get the params to do the thing



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
          <DetailsCard label="ID" value={patient.id} />
          <DetailsCard label="Age" value={patient.age} />
          <DetailsCard label="Gender" value={patient.gender} />
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6 pt-4">
        <DetailsCard label="Date of Birth" value={patient.dateOfBirth} />
        <DetailsCard label="Address" value={patient.address} />
        <DetailsCard label="Phone" value={patient.phone} />
        <DetailsCard label="Email" value={patient.email} />
        <DetailsCard
          label="Insurance Provider"
          value={patient.insuranceProvider}
        />
        <DetailsCard label="Policy Number" value={patient.policyNumber} />
        <DetailsCard label="Allergies" value={patient.allergies} />
        <DetailsCard label="Medications" value={patient.medications} />
      </div>
    </div>
  );
};

export default PatientInfo;
