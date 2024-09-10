import React, { useEffect, useState } from "react";
import axios from "axios";

// allows the doctor to make allocate doctors to the patients 
// the allocation still need a proper algorithm to work without human intervention

const AssignTable = () => {
  const [supervisor, setSupervisor] = useState(null);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  // Fetch supervisor and patients data
  const getUserData = async () => {
    try {
      const username = localStorage.getItem("user");
      await axios.get(
        `http://localhost:3000/api/supervisor/getuser/${username}`
      ).then((response)=>{
        const supervisorData = response.data.result;
      setSupervisor(supervisorData);

      //patients data is fetched as part of supervisor response
      // console.log(supervisor.doctors)  
      if (supervisorData && supervisorData.patients) {
        setPatients(supervisorData.patients);
        setDoctors(supervisor.doctors);
      }
      })

      
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelection = async (patientId, doctorId) => {
    // console.log(patientId, doctorId);
    try {
      await axios.post("http://localhost:3000/api/supervisor/assign", {
        patientId,
        doctorId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch data on component mount
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>S.No</th>
            <th>Patient Name</th>
            <th>Doctor Assigned</th>
            <th>Session Count</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>
          {/* Map through patients and generate rows */}
          {patients.length > 0 ? (
            patients.map((patient, index) => (
              <tr key={patient.$id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{patient.username}</div>
                      <div className="text-sm opacity-50">ill</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    {patient.doctors ? (
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={"/images/dp.jpg"}
                              alt="Doctor Avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold uppercase">
                            {patient.doctors.username}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <details className="dropdown">
                        <summary className="btn m-1">
                          {selectedDoctor || "Assign Doctor"}
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                          {doctors &&
                            doctors.map((data) => (
                              <button
                                key={data.$id}
                                onClick={() =>
                                  handleSelection(patient.$id, data.$id)
                                }
                                className="uppercase mx-1 my-2 hover:bg-slate-200 p-1 rounded-sm"
                              >
                                {data.username}
                              </button>
                            ))}
                        </ul>
                      </details>
                    )}
                  </div>
                </td>

                <td>{0}</td>

                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No patients assigned
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssignTable;
