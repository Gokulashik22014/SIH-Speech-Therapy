import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Routers from "./router/Routers.jsx";
import AuthProvider from "./context/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Routers />
    </AuthProvider>
  </StrictMode>
);
