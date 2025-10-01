// src/components/Experience.tsx
import React from "react";

interface ExperienceItem {
  title: string;
  date?: string;
  details: string[];
  liveUrl?: string;
}

const hackathons: ExperienceItem[] = [
  {
    title: "Hackaverse 2025 – Prime IT Club",
    date: "14–15 June 2025",
    details: [
      "Built a web app in 30 hours with a team.",
      "Contributed to both frontend and backend using React, Tailwind CSS, JavaScript, Node.js, MongoDB.",
      "Focused on authentication, UI design, dashboard, and API integration.",
    ],
  },
  {
    title: "ACIT Tech Fest 2.0 Hackathon",
    date: "12–13 Bhadra 2082",
    details: [
      "Built a web app in 24 hours under time constraints.",
      "Contributed to both frontend and backend using React, Tailwind CSS, JavaScript, Node.js, MongoDB.",
      "Implemented authentication, UI design, dashboard, and API integration.",
    ],
  },
];

const leadership: ExperienceItem = {
  title: "Creative Hub Director – Prime IT Club",
  date: "Sep 2025 – Present",
  details: [
    "Leading and managing community-driven projects and events within the club.",
    "Coordinating teams, planning initiatives, and supporting members in technical growth.",
  ],
};

const contributions: ExperienceItem[] = [
  {
    title: "Hackaverse Website",
    details: [
      "Contributed as a frontend developer focusing on UI development and responsive design.",
    ],
    liveUrl: "https://hackaversev2.primeitclub.com/",
  },
  {
    title: "CreativeHub Website",
    details: [
      "Contributed as a frontend developer, implementing Next.js, TypeScript, and Tailwind CSS for production-ready features.",
    ],
    liveUrl: "https://creativehub.primeitclub.com/",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Hackathons, leadership, and project contributions that shaped my journey.
          </p>
        </div>

        {/* Hackathon Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            🏆 Hackathon Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hackathons.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {item.title}
                </h4>
                {item.date && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.date}</p>
                )}
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {item.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            🎯 Leadership
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
              {leadership.title}
            </h4>
            {leadership.date && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{leadership.date}</p>
            )}
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {leadership.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Contributions */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            💻 Project Contributions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  {item.date && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.date}</p>
                  )}
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                    {item.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-4 py-2 w-fit bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    View Live
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
