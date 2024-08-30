import React from "react";

const User = () => {
  return (
    <div className="flex items-center space-x-5 bg-blue-400 mt-2 rounded-full px-2">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="./images/dp.jpg" />
        </div>
      </div>
      <div>
        <h1 className="text-md font-bold">Name</h1>
        <h1 className="text-sm text-white">Patient id</h1>
      </div>
    </div>
  );
};

export default User;
