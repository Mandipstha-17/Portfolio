import React from "react";
import { useActiveSection } from '../hooks/useActiveSection';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  role: string;
  date: string;
  details: string[];
  tags: string[];
  liveUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Creative Hub-Prime IT Club",
    role: "Creative Director",
    date: "Sep 2025 – Present",
    details: [
      "Led technical direction for Prime IT Club as Creative Director.",
      "Mentored club members in coding, problem-solving, and system design.",
      "Organized workshops and sessions to drive innovation and teamwork.",
    ],
    tags: ["React", "Node.js", "Express", "MySQL"],
    liveUrl: "https://creativehub.primeitclub.com/",
  },
  {
    title: "Hackaverse 2025",
    role: "Frontend Developer",
    date: "June 2024",
    details: [
      "Developed a responsive user interface using React and Tailwind CSS",
      "Built reusable UI components and integrated APIs to ensure seamless frontend functionality.",
      "Collaborated with the team to deliver a clean, responsive, and user-friendly application experience.",
    ],
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://hackaversev2.primeitclub.com/",
  },
  {
    title: "ACIT Tech Fest 2.0",
    role: "Fullstack Developer",
    date: "August 2025",
    details: [
      "Built a production-ready web management application in 24 hours focusing on scalable UI.",
      "Implemented complex state management and responsive design patterns.",
    ],
    tags: ["Node.js", "JavaScript", "MongoDB", "Express"],
  },
];

const Experience: React.FC<{ setActiveSection: (section: string) => void }> = ({ setActiveSection }) => {
  const sectionRef = useActiveSection('experience', setActiveSection);

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-space text-white mb-4">Experience</h2>
          <p className="text-slate-400 font-outfit text-xl max-w-2xl">
            A track record of building scalable applications and leading technical initiatives.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start"
            >
              {/* Timeline marker for desktop */}
              <div className="hidden md:block absolute left-[24.5%] top-2 bottom-[-3rem] w-px bg-slate-800 group-last:bg-transparent" />
              <div className="hidden md:block absolute left-[24.5%] top-2 w-2 h-2 rounded-full bg-slate-600 -translate-x-[3px] group-hover:bg-brand-cyan transition-colors duration-300 shadow-[0_0_10px_rgba(0,255,209,0)] group-hover:shadow-[0_0_10px_rgba(0,255,209,0.5)]" />
              
              <div className="text-slate-500 font-space text-base pt-1 uppercase tracking-wider">
                {exp.date}
              </div>
              
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-lg p-6 md:p-8 hover:bg-slate-900/60 hover:border-brand-cyan/30 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 font-space">{exp.title}</h3>
                    <p className="text-brand-cyan font-medium font-outfit text-lg mt-1">{exp.role}</p>
                  </div>
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-space text-slate-300 hover:text-brand-cyan transition-colors w-fit"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </a>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 font-outfit leading-relaxed">
                      <span className="text-brand-cyan mt-1 flex-shrink-0 text-sm">▹</span>
                      <span className="text-base">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded bg-brand-cyan/10 text-brand-cyan text-sm font-space border border-brand-cyan/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
