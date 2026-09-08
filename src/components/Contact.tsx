import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
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
          <h2 className="text-4xl font-bold font-space text-white mb-4">Get in Touch</h2>
          <p className="text-slate-300 font-outfit text-lg max-w-2xl mx-auto">
            Interested in collaborating, discussing new opportunities, or exploring engineering roles? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <a
            href="mailto:mandipstha17@gmail.com"
            className="flex flex-col items-center justify-center p-6 sm:p-7 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">Email</h3>
            <p className="text-slate-300 font-outfit text-xs sm:text-sm md:text-[14px] lg:text-[13.5px] xl:text-sm whitespace-nowrap tracking-tight">mandipstha17@gmail.com</p>
          </a>

          <a
            href="tel:+9779813797170"
            className="flex flex-col items-center justify-center p-6 sm:p-7 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">Phone</h3>
            <p className="text-slate-300 font-outfit text-sm whitespace-nowrap">+977 9813797170</p>
          </a>

          <a
            href="https://github.com/Mandipstha-17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 sm:p-7 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">GitHub</h3>
            <p className="text-slate-300 font-outfit text-sm whitespace-nowrap">Mandipstha-17</p>
          </a>

          <a
            href="https://www.linkedin.com/in/mandip-shrestha-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 sm:p-7 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 hover:border-slate-600 transition-colors duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="text-slate-300 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-200 font-space mb-1">LinkedIn</h3>
            <p className="text-slate-300 font-outfit text-sm whitespace-nowrap">mandip-shrestha</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
