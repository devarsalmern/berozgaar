// src/components/Dashboard/JobSeekerDashboard.js
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const JobSeekerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const response = await axios.get(
        `/api/job-seeker/${user.id}/applied-jobs`
      );
      setAppliedJobs(response.data);
    };
    fetchAppliedJobs();
  }, [user]);

  return (
    <div>
      <h1>Your Applied Jobs</h1>
      {appliedJobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.status}</p>
        </div>
      ))}
    </div>
  );
};

export default JobSeekerDashboard;
