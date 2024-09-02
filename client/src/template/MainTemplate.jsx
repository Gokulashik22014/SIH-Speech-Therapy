import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import useAuthContext from "../hooks/useAuthContext";
function MainTemplate() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login-register");
    }
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <SearchBar />
      <div className="flex w-full justify-between mt-2 h-full">
        {/* first */}
        <div className="w-1/6 h-full">
          <Navbar />
        </div>
        <div className="w-5/6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainTemplate;
