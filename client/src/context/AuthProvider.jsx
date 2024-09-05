import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "../pages/Home/Home.jsx";
import CustomerHome from "../pages/Customers/CustomerHome.jsx";
import Patients from "../pages/Patient/Patients.jsx";
import SuperDoctorHome from "../pages/SuperDoctor/SuperDoctorHome.jsx";
import Doctor from "../pages/Customers/Doctor.jsx";
import Students from "../pages/SuperDoctor/Student.jsx";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // normal
  const pageInfo = {
    patient: {
      home: <CustomerHome />,
      sub: { link: "/doctors", page: <Doctor /> },
    },
    doctor: {
      home: <Home />,
      sub: { link: "/patients", page: <Patients /> },
    },
    supervisor: {
      home: <SuperDoctorHome />,
      sub: { link: "/students", page: <Students /> },
    },
  };
  const page = [pageInfo.patient, pageInfo.doctor, pageInfo.supervisor];
  //   states from here
  const [user, setUser] = useState({
    username: "",
    email: "",
    role: 0,
  });

  //   function from here
  const login = async (email, password) => {
    try {
      console.log(email);
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.success) {
        const data = response.data.result;
        localStorage.setItem("user", data.username);
        localStorage.setItem("role", data.role);
        localStorage.setItem("email", data.email);
        setUser((prevUser) => ({
          ...prevUser,
          username: localStorage.getItem("user"),
          email: localStorage.getItem("email"),
          role: localStorage.getItem("role"),
        }));
      }
      setUserPresent(true)
      return response.data.success;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const register = async (username, email, password, roleOfUser) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/create",
        {
          email: email,
          password: password,
          role: roleOfUser,
          username: username,
        }
      );
      if (response.data.success) {
        localStorage.setItem("user", username);
        localStorage.setItem("role", roleOfUser);
        localStorage.setItem("email", email);
        setUser((prevUser) => ({
          ...prevUser,
          username,
          email,
          role: roleOfUser,
        }));
      setUserPresent(true)

      }
      return response.data.success;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const logout = () => {
    localStorage.clear();
  };
  const authInfo = { user, pageInfo, page, login, register, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
