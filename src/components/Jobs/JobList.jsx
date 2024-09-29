// src/components/Jobs/JobList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("/api/jobs");
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <Link to={`/job-listing/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
