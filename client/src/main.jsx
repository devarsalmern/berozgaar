import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Context/AuthContext"; // default import
import "./index.css"; // Ensure this path is correct
import "./App.css";

// import your AuthProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
