import { useActiveSection } from '../hooks/useActiveSection';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useActiveSection('home', setActiveSection);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0" />
      
      {/* Minimal grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col justify-center">
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-sm font-medium text-slate-300 w-fit opacity-0 animate-fade-in-up [animation-delay:0ms]">
            Backend Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-space text-white leading-[1.1] opacity-0 animate-fade-in-up [animation-delay:100ms]">
            Building robust <br/>
            <span className="text-slate-400">backend architectures.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-outfit opacity-0 animate-fade-in-up [animation-delay:200ms]">
            I'm Mandip Shrestha — a Backend Developer specializing in Node.js, scalable APIs, and database architecture. I've shipped full-stack and frontend projects that give me end-to-end product thinking most backend developers lack.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up [animation-delay:300ms]">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white hover:bg-slate-200 text-slate-950 font-semibold rounded-full transition-all duration-300"
            >
              View Experience
            </button>

            <a 
              href="mailto:mandipstha17@gmail.com" 
              className="px-8 py-3.5 border border-slate-700 hover:border-slate-500 bg-transparent text-slate-300 font-medium rounded-full transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;