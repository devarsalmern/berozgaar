import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import JobList from "./components/Jobs/JobList";
import JobDetails from "./components/Jobs/JobDetails";
import JobSeekerDashboard from "./components/Dashboard/JobSeekerDashboard";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import AuthProvider from "./Context/AuthContext";
import PrivateRoute from "./components/routes/PrivateRoutes";
import HomePage from "./components/HomePage"; // Add your home page component here
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          {/* Define a route for the root path */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route
            path="/job-seeker/dashboard"
            element={<PrivateRoute component={JobSeekerDashboard} />}
          />
          <Route
            path="/employer/dashboard"
            element={<PrivateRoute component={EmployerDashboard} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
