import { FileText } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About = ({ setActiveSection }: AboutProps) => {
  const sectionRef = useActiveSection('about', setActiveSection);

  const skills = [
    { category: 'Languages', items: 'JavaScript (Node.js), TypeScript, C/C++, SQL' },
    { category: 'Frameworks/Libraries', items: 'Express.js, NestJS, React, Next.js' },
    { category: 'Databases & Cache', items: 'MongoDB, PostgreSQL, MySQL, Redis' },
    { category: 'Tools & Architecture', items: 'REST APIs, Git, Docker, JWT, System Design' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-slate-950 relative border-t border-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space text-white mb-4">About & Technical Profile</h2>
          <p className="text-slate-400 font-outfit text-lg max-w-2xl">
            A brief overview of my background and core competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio Section */}
          <div className="space-y-6 text-slate-300 font-outfit text-lg leading-relaxed font-light">
            <p>
              I'm focused on backend development, specializing in building robust, high-performance server architectures. My core expertise lies in the Node.js ecosystem, relational and NoSQL databases, and API design.
            </p>
            <p>
              I take pride in writing secure, scalable code and architecting systems that can handle complex data flows. While my primary focus is backend engineering, my full-stack experience allows me to integrate seamlessly with frontend teams.
            </p>
            <p>
              When I'm not writing code, I'm directing technical initiatives at the Prime IT Club, organizing hackathons, and exploring advanced software architecture patterns.
            </p>
            
            <div className="pt-6">
              <a 
                // TODO: replace with direct PDF URL
                href="https://drive.google.com/drive/u/0/folders/1BSAAJjE6wCaY3GM2yniFA-aeSrnlXiVY" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 px-6 py-3 rounded-full transition-colors"
              >
                <FileText size={18} />
                View Full Resume
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8 h-fit">
            <h3 className="text-xl font-bold text-slate-100 font-space mb-6">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 font-space">
                    {skill.category}
                  </h4>
                  <p className="text-slate-300 font-medium font-outfit">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;