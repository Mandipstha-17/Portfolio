import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

import { GitHubCalendar } from 'react-github-calendar';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About = ({ setActiveSection }: AboutProps) => {
  const sectionRef = useActiveSection('about', setActiveSection);

  const jsonSkills = `{
  "languages": ["JavaScript", "TypeScript", "C/C++", "PHP", "SQL"],
  "frameworks": ["Express.js", "React", "Next.js"],
  "databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "tools": ["Git", "REST APIs", "JWT", "Figma"]
}`;

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-space text-white mb-4">About Me</h2>
          <p className="text-slate-400 font-outfit text-xl max-w-2xl">
            A deeper dive into my engineering journey and core competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-400 font-outfit text-lg leading-relaxed"
          >
            <p>
              My journey into coding started when I realized the frontend is just the tip of the iceberg. I became fascinated with <span className="text-slate-200 font-medium">what happens behind the scenes</span>—how data flows securely, how APIs scale under load, and how architectural decisions impact product success.
            </p>
            <p>
              Recently, while building the <span className="text-brand-cyan font-medium">CreativeHub Website</span>, I got deep into improving how data loads on the frontend — small changes that made a real difference in performance. I enjoy working close to the database, optimizing queries and thinking about how systems should be structured as they grow.

            </p>
            <p>
              Outside of building APIs, I lead the <span className="text-slate-200 font-medium">Prime IT Club</span> as the Creative Director, mentoring members and organizing technical events.
            </p>
            
            <div className="pt-6">
              <a 
                href="https://drive.google.com/drive/u/1/folders/1qP8ZTIIpJKN8_ZxqFGstmf47Pmj79l1C" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-space text-background bg-brand-cyan hover:bg-brand-cyan/90 px-8 py-4 rounded transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] font-bold"
              >
                <FileText size={20} />
                View_Resume.pdf
              </a>
            </div>
          </motion.div>

          {/* Skills Terminal Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-xl shadow-2xl font-mono text-sm md:text-base overflow-hidden flex flex-col"
          >
            <div className="w-full h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 shrink-0">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-sm text-slate-500">bash</div>
            </div>
            
            <div className="p-6 flex-1 overflow-x-auto">
              <div className="text-slate-300 mb-4">
                <span className="text-brand-cyan mr-2">$</span>
                <span className="text-slate-300">cat skills.json</span>
              </div>
              <pre className="text-slate-300 font-mono leading-relaxed whitespace-pre-wrap break-words">
                <code dangerouslySetInnerHTML={{
                  __html: jsonSkills.replace(
                    /"([^"]+)":/g, 
                    '<span class="text-brand-amber">"$1"</span>:'
                  ).replace(
                    /"([^"]+)"(?=[,\\]|\])/g, 
                    '<span class="text-brand-cyan">"$1"</span>'
                  )
                }} />
              </pre>
              <div className="mt-4 flex">
                <span className="text-brand-cyan mr-2">$</span>
                <span className="animate-pulse text-slate-400">_</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-slate-800 bg-slate-900/40 rounded-xl p-8 lg:p-10"
        >
          <h3 className="text-2xl font-bold text-slate-100 font-space mb-8 flex items-center gap-2">
            <span className="text-brand-cyan">&gt;</span> GitHub Contributions
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="w-full overflow-hidden flex justify-center bg-slate-950 rounded-lg p-6 border border-slate-800/80 hover:border-brand-cyan/30 transition-all duration-500">
              <GitHubCalendar 
                username="Mandipstha-17" 
                colorScheme="dark"
                theme={{
                  dark: ['#1e293b', '#2c3e35', '#405c4f', '#567c6a', '#6D9886']
                }}
                fontSize={12}
                blockSize={12}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;