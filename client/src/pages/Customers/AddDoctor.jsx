import React, { useState, useEffect } from "react";
import axios from "axios";


// the component enables the patient to book that is choose a supervisor still needs some work 

const AddDoctor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  //doctor names from backend on component mount
  useEffect(() => {
    console.log(doctors)
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/supervisor/getusers"); // Replace with your API
        setDoctors(response.data.result); // Assuming the API returns an array of doctor names
        // setFilteredDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchValue)
    );
    setFilteredDoctors(filtered);
  };

  // Function to handle booking
  const handleBookDoctor = async(doctorId) => {
    const response=await axios.post("http://localhost:3000/api/patient/update",{user:localStorage.getItem("user"),supervisor:doctorId})
    
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search doctors..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      {/* Doctors List */}
      <div className="max-h-64 overflow-y-auto">
        {doctors&&doctors.map((doctor) => (
          <div
            key={doctor.$id}
            className="flex justify-between items-center mb-2 p-2 border border-gray-200 rounded-lg"
          >
            <span className="text-lg">{doctor.username}</span>
            <button
              onClick={() => handleBookDoctor(doctor.$id)}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDoctor;
