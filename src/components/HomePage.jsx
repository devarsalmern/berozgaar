// src/components/HomePage.jsx
import React from "react";
import Layout from "./Layout/Layout";
import PopularJobs from "./PopularJobs";
import FeaturedJobs from "./FeaturedJobs";
import HowOurWebsiteWorks from "./HowOurWebsiteWorks";
import CategoryStats from "./CategoryStats"; // Updated component for stats with icons
import { Link } from "react-router-dom";
import SignUpSection from "./SignupSection";

const HomePage = () => (
  <Layout>
    <header className="text-center mb-8 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold mb-2">Welcome to Berozgaar</h1>
      <p className="text-lg">
        Your ultimate destination for job listings and career opportunities
      </p>
    </header>

    <section className="bg-white p-6 rounded-lg shadow-lg mb-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Find Your Perfect Job
      </h2>
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-sm hover:bg-blue-600">
          Search
        </button>
      </div>
    </section>

    <PopularJobs />
    <FeaturedJobs />
    <HowOurWebsiteWorks />
    <CategoryStats />
    <SignUpSection />
  </Layout>
);

export default HomePage;
