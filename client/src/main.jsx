import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CustomerHome from "./pages/Customers/CustomerHome.jsx";
import Patients from "./pages/Patient/Patients.jsx";
import Supervisor from "./pages/Supervisor.jsx";
import Settings from "./pages/Settings.jsx";
import History from "./pages/History.jsx";
import MainTemplate from "./template/MainTemplate.jsx";
import PatientSummary from "./pages/Patient/PatientSummary.jsx";
import SuperDoctorHome from "./pages/SuperDoctor/SuperDoctorHome.jsx"
import LoginRegisterPage from "./pages/LoginRegisterPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        path: "/",
        element: <SuperDoctorHome />,
      },
      {
        path: "/patients",
        element: <Patients />,
      },
      {
        path: "/patients/:id",
        element: <PatientSummary />,
      },
      { path: "/supervisor", element: <Supervisor /> },
      { path: "/history", element: <History /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
  {
    path:"/login-register",
    element:<LoginRegisterPage/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
