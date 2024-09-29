// src/components/Home/CategoryStats.jsx
import React from "react";
import { FaBullhorn, FaBuilding, FaNewspaper, FaUser } from "react-icons/fa";

const CategoryStats = () => {
  const stats = [
    {
      title: "Live Jobs",
      number: 123,
      icon: <FaBullhorn className="text-4xl text-blue-500" />,
      link: "/jobs",
    },
    {
      title: "Companies",
      number: 45,
      icon: <FaBuilding className="text-4xl text-green-500" />,
      link: "/companies",
    },
    {
      title: "New Jobs",
      number: 78,
      icon: <FaNewspaper className="text-4xl text-yellow-500" />,
      link: "/new-jobs",
    },
    {
      title: "Candidates",
      number: 321,
      icon: <FaUser className="text-4xl text-red-500" />,
      link: "/candidates",
    },
  ];

  return (
    <section className="mb-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Category Stats
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-lg flex items-center justify-between bg-white"
          >
            <div className="flex items-center">
              {stat.icon}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="text-gray-700 text-2xl font-bold">
                  {stat.number}
                </p>
              </div>
            </div>
            <a
              href={stat.link}
              className="text-blue-500 hover:underline text-lg"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryStats;
