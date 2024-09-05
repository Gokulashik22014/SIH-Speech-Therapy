import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Settings from "../pages/Settings.jsx";
import History from "../pages/History.jsx";
import MainTemplate from "../template/MainTemplate.jsx";
import PatientSummary from "../pages/Patient/PatientSummary.jsx";
import LoginRegisterPage from "../pages/LoginRegisterPage.jsx";
import useAuthContext from "../hooks/useAuthContext.jsx";


const Routers = () => {
  const { pageInfo,page } = useAuthContext();
  
  const role=Number(localStorage.getItem('role'))
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainTemplate />,
      children: [
        {
          path: "/",
          element: page[role].home,
        },
        {
          path: page[role].sub.link,
          element: page[role].sub.page,
        },
        {
          path: "/patients/:id",
          element: <PatientSummary />,
        },
        { path: "/history", element: <History /> },
        { path: "/settings", element: <Settings /> },
      ],
    },
    {
      path: "/login-register",
      element: <LoginRegisterPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routers;
