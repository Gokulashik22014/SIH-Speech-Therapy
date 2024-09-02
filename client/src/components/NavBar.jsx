import React from "react";
import { GoHome, GoHistory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
function capitalizeSubstring(str) {
  if (!str || str.length <= 1) {
    return str;
  }
  let first=str.charAt(0)
  let capitalized=first.toUpperCase()+str.substring(1)
  return capitalized;
}
const Navbar = () => {
  const location = useLocation();
  const {user,pageInfo,page}=useAuthContext()
  const navigate=useNavigate()
//   console.log(location.pathname)
  const navbarDetails = [
    { name: "Home", icon: <GoHome />, link: "/" },
    { name: capitalizeSubstring(page[user.role].sub.link.substring(1)), icon: <FaRegUser />, link: page[user.role].sub.link},
    { name: "Settings", icon: <IoSettingsOutline />, link: "/settings" },
    { name: "History", icon: <GoHistory />, link: "/history" },
  ];
  return (
    <div className="flex flex-col bg-slate-100 w-full h-full items-center justify-around">
      <div className={`h-1/2 flex flex-col w-full items-center space-y-6 `}>
        {navbarDetails.map((data) => (
          <button
            className={`flex flex-row items-center px-4 py-2 rounded-lg w-1/2 justify-between mt-2 border ${
              location.pathname === data.link ? "active" : ""
            } hover:scale-105 hover:bg-slate-300`}
            onClick={()=>navigate(data.link)}
          >
            <div>{data.icon}</div>
            <div className="flex">
              <h1>{data.name}</h1>
            </div>
          </button>
        ))}
      </div>
      <div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">NeuroNex</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
