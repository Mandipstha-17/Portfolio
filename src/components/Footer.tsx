import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a 
              href="#home"
              className="text-2xl font-bold font-space text-slate-100 hover:text-white transition-colors mb-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ms.dev
            </a>
            <p className="text-slate-500 text-sm font-outfit">
              © {currentYear} Mandip Shrestha. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Mandipstha-17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-full"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mandip-shrestha-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:mandipstha17@gmail.com" 
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-full"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;