import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const navigate=useNavigate()
  const {logout}=useAuthContext()
  const handleLogout=()=>{
    logout()
    navigate("/login-register")
  }
  return (
    <div className="navbar bg-base-100 shadow-green-100 shadow-md" >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">NeuroNex</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/dp.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
