import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

interface ContactProps {
  setActiveSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setActiveSection }) => {
  const sectionRef = useActiveSection('contact', setActiveSection);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-slate-950 relative border-t border-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold font-space text-white mb-4">Let's build something together</h2>
          <p className="text-slate-400 font-outfit text-lg max-w-2xl mx-auto">
          Open to new opportunities. Let's build something.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:mandipstha17@gmail.com"
            className="flex flex-col items-center justify-center p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">Email</h3>
            <p className="text-slate-400 font-outfit text-sm">mandipstha17@gmail.com</p>
          </a>

          <a
            href="https://github.com/Mandipstha-17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">GitHub</h3>
            <p className="text-slate-400 font-outfit text-sm">Mandipstha-17</p>
          </a>

          <a
            href="https://www.linkedin.com/in/mandip-shrestha-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">LinkedIn</h3>
            <p className="text-slate-400 font-outfit text-sm">mandip-shrestha</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
