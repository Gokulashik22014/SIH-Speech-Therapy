import React, { useState } from "react";

function Settings() {
  const [username, setUsername] = useState("admin@company.org");
  const [password, setPassword] = useState("");

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log("Changes saved!");
  };

  const handleDeleteAccount = () => {
    // Logic to delete account
    console.log("Account deleted!");
  };

  return (
    <div className="flex flex-col p-5 bg-white font-sans">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
      </div>

      <div className="flex">
        <div className="w-48 bg-white p-2 rounded-lg shadow-sm">
          <ul className="list-none p-0 m-0">
            <li className="p-2 mb-2 text-sm text-gray-600 cursor-pointer transition-colors duration-300 rounded-md hover:bg-blue-100 hover:text-gray-800 active:bg-blue-200">
              Edit Profile
            </li>
            <li className="p-2 mb-2 text-sm text-gray-600 cursor-pointer transition-colors duration-300 rounded-md bg-blue-100 text-gray-800">
              Account Settings
            </li>
            <li className="p-2 mb-2 text-sm text-gray-600 cursor-pointer transition-colors duration-300 rounded-md hover:bg-blue-100 hover:text-gray-800">
              Password
            </li>
            <li className="p-2 mb-2 text-sm text-gray-600 cursor-pointer transition-colors duration-300 rounded-md hover:bg-blue-100 hover:text-gray-800">
              Social Profiles
            </li>
            <li className="p-2 mb-2 text-sm text-gray-600 cursor-pointer transition-colors duration-300 rounded-md hover:bg-blue-100 hover:text-gray-800">
              Team Members
            </li>
            <li className="p-2 mb-2 text-sm text-gray-600 cursor-pointer transition-colors duration-300 rounded-md hover:bg-blue-100 hover:text-gray-800">
              Notifications
            </li>
          </ul>
        </div>

        <div className="flex-1 pl-5">
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Account Settings
            </h3>
            <div className="mb-3">
              <label className="block mb-1 text-xs text-gray-600">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1 text-xs text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-800 rounded-md hover:opacity-90"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Delete Account
            </h3>
            <p className="mb-2 text-xs text-gray-500">
              Deleting your account is permanent and cannot be reversed.
            </p>
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:opacity-90"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
