import React from "react";
const UserCard = () => {
  return (
    <div className="w-52 h-80 bg-slate-300 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
        <img
          alt="User logo"
          src="./images/dp.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h2>

      <p className="text-sm text-gray-600 mb-4">
        <strong>Defect:</strong> None
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        View Profile
      </button>
    </div>
  );
};
const ProfileCard = () => {
  return (
    <div className="px-6 py-8 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 custom-grid-gap">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default ProfileCard;
