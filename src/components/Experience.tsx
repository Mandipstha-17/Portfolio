import React from "react";

interface ExperienceItem {
  title: string;
  role: string;
  date: string;
  details: string[];
  liveUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Creative Hub – Prime IT Club",
    role: "Director",
    date: "Sep 2025 – Present",
    details: [
      "Directing community-driven technical projects and overseeing the development lifecycle of club initiatives.",
      "Engineered the frontend architecture for the CreativeHub website using Next.js, TypeScript, and Tailwind CSS.",
      "Mentoring club members in modern web development practices and system design.",
    ],
    liveUrl: "https://creativehub.primeitclub.com/",
  },
  {
    title: "Hackaverse 2025",
    role: "Frontend Developer",
    date: "June 2025",
    details: [
      "Developed a full-stack application under a 30-hour time constraint, leading frontend architecture and API integration.",
      "Architected the user authentication flow and built a responsive dashboard using React and Tailwind CSS.",
      "Collaborated across the stack using Node.js and MongoDB to ensure seamless data delivery.",
    ],
    liveUrl: "https://hackaversev2.primeitclub.com/",
  },
  {
    title: "ACIT Tech Fest 2.0",
    role: "Frontend Developer",
    date: "Bhadra 2082",
    details: [
      "Built a production-ready web application in 24 hours, focusing on scalable UI components.",
      "Implemented complex state management and responsive design patterns.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space text-white mb-4">Experience & Leadership</h2>
          <p className="text-slate-400 font-outfit text-lg max-w-2xl">
            A track record of building scalable applications and leading technical initiatives.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
              {/* Timeline marker for desktop */}
              <div className="hidden md:block absolute left-[24.5%] top-2 bottom-[-3rem] w-px bg-slate-800 group-last:bg-transparent" />
              <div className="hidden md:block absolute left-[24.5%] top-2 w-2 h-2 rounded-full bg-slate-600 -translate-x-[3px] group-hover:bg-slate-300 transition-colors duration-300" />
              
              <div className="text-slate-500 font-space text-sm pt-1 uppercase tracking-wider">
                {exp.date}
              </div>
              
              <div className="bg-slate-900/20 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:bg-slate-900/40 hover:border-slate-700/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-space">{exp.title}</h3>
                    <p className="text-slate-400 font-medium font-outfit">{exp.role}</p>
                  </div>
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 px-4 py-2 rounded-full transition-colors w-fit"
                    >
                      View Project
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 font-outfit leading-relaxed">
                      <span className="text-slate-600 mt-1.5 flex-shrink-0">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
