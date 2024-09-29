// src/components/Jobs/JobDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await axios.get(`/api/jobs/${id}`);
      setJob(response.data);
    };
    fetchJobDetails();
  }, [id]);

  return (
    <div>
      {job && (
        <>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
          {/* Add a button to apply for this job */}
        </>
      )}
    </div>
  );
};

export default JobDetails;
