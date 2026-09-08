import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

import { GitHubCalendar } from 'react-github-calendar';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About = ({ setActiveSection }: AboutProps) => {
  const sectionRef = useActiveSection('about', setActiveSection);

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
            A deeper dive into my engineering journey, background, and core competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 font-outfit text-lg md:text-xl leading-relaxed"
          >
            <p>
              I am a <span className="text-white font-medium">Software Web Developer</span> with hands-on experience building full-stack web applications for real users and working across the entire development lifecycle.
            </p>
            <p>
              My engineering focus centers on architecting <span className="text-brand-cyan font-medium">RESTful APIs</span>, structuring scalable databases with MySQL, PostgreSQL, and MongoDB, and pairing them with fast, responsive React interfaces.
            </p>
            <p>
              As the <span className="text-white font-medium">Creative Director at Prime Creative Hub</span>, I lead technical projects, facilitate coding workshops for club members, and mentor students in modern web development best practices.
            </p>

            {/* Education Badge */}
            <div className="pt-2">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
                <span className="text-xs uppercase tracking-wider text-brand-cyan font-space font-semibold">Education</span>
                <h4 className="text-white font-space font-bold text-xl mt-1">Bsc.CSIT</h4>
                <p className="text-slate-300 font-outfit text-base">Prime College, Kathmandu, Nepal</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://drive.google.com/drive/u/1/folders/1qP8ZTIIpJKN8_ZxqFGstmf47Pmj79l1C" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-base font-space text-slate-950 bg-brand-cyan hover:bg-brand-cyan/90 px-7 py-3.5 rounded-lg transition-all shadow-lg shadow-brand-cyan/10 hover:shadow-brand-cyan/20 hover:-translate-y-0.5 font-bold"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Technical Competency Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-space font-bold text-base">Backend & APIs</h4>
                <span className="text-xs font-mono text-brand-cyan">Core Domain</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'RESTful APIs', 'PHP'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-slate-800/80 text-slate-200 text-sm font-space border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-space font-bold text-base">Frontend & Mobile</h4>
                <span className="text-xs font-mono text-slate-400">UI / UX</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'React Native', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-slate-800/80 text-slate-200 text-sm font-space border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-space font-bold text-base">Databases & Storage</h4>
                <span className="text-xs font-mono text-slate-400">SQL & NoSQL</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-slate-800/80 text-slate-200 text-sm font-space border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-space font-bold text-base">Tools, Cloud & Soft Skills</h4>
                <span className="text-xs font-mono text-slate-400">Workflow</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Vercel', 'cPanel', 'Cloudinary', 'Team Leadership', 'Mentoring'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-slate-800/80 text-slate-200 text-sm font-space border border-slate-700/60">
                    {skill}
                  </span>
                ))}
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
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
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