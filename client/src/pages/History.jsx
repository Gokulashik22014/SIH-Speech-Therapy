import React, { useState } from 'react';

const History = () => {
  const [patients, setPatients] = useState([]);

  const [cases, setCases] = useState([
    { caseId: '#6548', created: '2 min ago', details: 'Speech Therapy for children', status: 'Completed' },
    { caseId: '#6549', created: '2 min ago', details: 'Speech Therapy for children', status: 'Ongoing' },
    { caseId: '#6550', created: '2 min ago', details: 'Speech Therapy for adult', status: 'Pending' },
    { caseId: '#6551', created: '2 min ago', details: 'Speech Therapy', status: 'Completed' },
    // Add more cases as needed
  ]);

  return (
    <div className="flex min-h-[50vh] bg-white">
      {/* Main Content */}
      <div className="flex-1 p-5 max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="mb-5 text-2xl text-gray-800">All Cases</h2>
          <input 
            type="text" 
            placeholder="Search by Case ID" 
            className="w-full p-3 mb-5 rounded-lg border border-gray-300 text-lg" 
          />
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="p-3 text-left text-gray-600">CASE ID</th>
                <th className="p-3 text-left text-gray-600">CREATED</th>
                <th className="p-3 text-left text-gray-600">DETAILS</th>
                <th className="p-3 text-left text-gray-600">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {cases.map(c => (
                <tr key={c.caseId}>
                  <td className="p-3 border-b border-gray-200">{c.caseId}</td>
                  <td className="p-3 border-b border-gray-200">{c.created}</td>
                  <td className="p-3 border-b border-gray-200">{c.details}</td>
                  <td className={`p-3 border-b border-gray-200 ${
                    c.status === 'Completed' ? 'text-green-600' : 
                    c.status === 'Ongoing' ? 'text-yellow-500' : 
                    'text-red-600'
                  }`}>
                    {c.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;