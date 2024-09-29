// src/components/Dashboard/EmployerDashboard.js
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const EmployerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobListings = async () => {
      const response = await axios.get(`/api/employer/${user.id}/job-listings`);
      setJobListings(response.data);
    };
    fetchJobListings();
  }, [user]);

  return (
    <div>
      <h1>Your Job Listings</h1>
      {jobListings.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployerDashboard;
