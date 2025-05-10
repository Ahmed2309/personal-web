"use client";

import { experiences } from "../data/experienceData";
import { useState } from "react";

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false); // State to toggle showing all experiences
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // State to track expanded experience index

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expansion for the clicked index
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3); // Show only 3 initially

  return (
    <section id="experience" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="flex flex-col gap-8">
        {displayedExperiences.map((experience, index) => (
          <div key={index} className="w-full">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-white">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.company} - {experience.date}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {experience.location}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {experience.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {experience.technologies.slice(0, 5).map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
                {experience.technologies.length > 5 && expandedIndex !== index && (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      handleExpand(index);
                    }}
                    className="text-sm bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500"
                  >
                    +{experience.technologies.length - 5} more
                  </li>
                )}
                {expandedIndex === index &&
                  experience.technologies.slice(5).map((tech, techIndex) => (
                    <li
                      key={`extra-${techIndex}`}
                      className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
              </ul>
            </a>
          </div>
        ))}
      </div>
      {/* Show "More" button only if there are more than 3 experiences */}
      {experiences.length > 3 && !showAll && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)} // Toggle the state to show all experiences
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            More
          </button>
        </div>
      )}
    </section>
  );
}