"use client";

import { useState } from "react";
import projects from "../data/projectsData";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false); // State to toggle showing all projects

  const displayedProjects = showAll ? projects : projects.slice(0, 4); // Show only 4 initially

  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col gap-8">
        {displayedProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start gap-6 p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-center"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
      {/* Show "More" button only if there are more than 4 projects */}
      {projects.length > 4 && !showAll && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)} // Toggle the state to show all projects
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}