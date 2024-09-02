import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginRegisterPage = () => {
  // State management for form toggle
  const [isSignUp, setIsSignUp] = useState(false);

  // State management for form inputs
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Patient");

  // Handler for form toggle
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    // Reset form inputs when toggling
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("Doctor");
  };
  const navigate = useNavigate();
  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let roleOfUser = 0;
    try {
      if (isSignUp) {
        // Handle sign-up logic here
        if (role === "Doctor") roleOfUser = 1;
        else if (role === "Supervisor") roleOfUser = 2;

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
          localStorage.setItem("user", {
            username: username,
            email: email,
            role: roleOfUser,
          });
        }
        navigate("/");
      } else {
        // Handle sign-in logic here
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          { email: email, password: password }
        );
        if (response) {
          localStorage.setItem("user", {
            username: username,
            email: email,
            role: roleOfUser,
          });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        {/* Tabs Titles */}
        <div className="flex justify-center">
          <h2
            onClick={() => setIsSignUp(false)}
            className={`text-lg font-semibold uppercase mx-2 pb-2 cursor-pointer ${
              !isSignUp
                ? "text-gray-700 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
          >
            Sign In
          </h2>
          <h2
            onClick={() => setIsSignUp(true)}
            className={`text-lg font-semibold uppercase mx-2 pb-2 cursor-pointer ${
              isSignUp
                ? "text-gray-700 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
          >
            Sign Up
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          {isSignUp && (
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 text-center py-2 px-4 rounded-md mb-4 focus:bg-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-all duration-300"
            />
          )}
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 text-gray-800 text-center py-2 px-4 rounded-md mb-4 focus:bg-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-all duration-300"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-200 text-gray-800 text-center py-2 px-4 rounded-md mb-4 focus:bg-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-all duration-300"
          />
          {isSignUp && (
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md mb-4 focus:bg-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-all duration-300"
            >
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
              <option value="Supervisor">Supervisor</option>
            </select>
          )}
          <input
            type="submit"
            value={isSignUp ? "Sign Up" : "Log In"}
            className="w-full bg-blue-400 text-white py-2 rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300"
          />
        </form>

        {/* Remind Password */}
        {!isSignUp && (
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-400 hover:text-blue-500 underline">
              Forgot Password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterPage;
