// src/components/Profile/EmployerProfile.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const EmployerProfile = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    companyName: user?.companyName || "",
    email: user?.email || "",
  });

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employer/${user.id}/profile`, profileData);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Profile update error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="companyName"
        value={profileData.companyName}
        onChange={handleInputChange}
        placeholder="Company Name"
      />
      <input
        type="email"
        name="email"
        value={profileData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EmployerProfile;
