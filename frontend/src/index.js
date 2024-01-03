import React from "react";
import ReactDOM from "react-dom/client";

// App File For Importing Component Data
import App from "./App";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

// External CSS File for styling and Font Family
import "./Poppins.css";
import "./index.css";

// Toast Imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
