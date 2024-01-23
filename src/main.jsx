import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import AuthRoute from "./utils/AuthRoute.jsx";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/user.context.jsx";

// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = "https://banghao.studio:8443";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <AuthRoute>
          <UserProvider>
            <App />
          </UserProvider>
        </AuthRoute>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
