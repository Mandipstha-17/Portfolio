import { useActiveSection } from '../hooks/useActiveSection';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const terminalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useActiveSection('home', setActiveSection);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 px-4 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0 pointer-events-none" />

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Headline & Typewriter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 text-brand-cyan font-space text-base uppercase tracking-wider font-semibold">
              Hi, my name is Mandip Shrestha.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.2] font-space">
              I build <br className="hidden md:block" />
              <span className="text-slate-400">
                <TypeAnimation
                  sequence={[
                    'with Node.js.', 200,
                    'with TypeScript.', 200,
                    'with React.', 200,
                    'with Next.js.', 200,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-lg font-outfit">
              I specialize in Node.js, databases, and modern web frameworks to create fast, scalable, and secure applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 font-space text-lg">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-brand-cyan hover:bg-brand-cyan/90 text-slate-950 font-bold rounded transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              >
                View My Work
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border border-slate-700 hover:border-brand-cyan bg-transparent text-slate-300 font-medium rounded transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right Side: Terminal Window */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={terminalVariants}
            className="w-full max-w-lg mx-auto lg:ml-auto rounded-lg overflow-hidden border border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-2xl font-space text-base md:text-lg"
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/80">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-slate-500 text-sm">mandip.js — bash</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-slate-300 space-y-4 min-h-[250px] font-mono">
              <div className="flex">
                <span className="text-brand-cyan mr-2">$</span>
                <TypeAnimation
                  sequence={[
                    'node start.js',
                    500,
                  ]}
                  wrapper="span"
                  speed={40}
                  cursor={false}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-slate-400 space-y-2"
              >
                <p>{'>'} Initializing developer...</p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                  {'>'} Loading skills: Node.js, TypeScript, PostgreSQL </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>
                  {'>'} Loading frameworks: React, Express, Next.js
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 }}>
                  {'>'} Status: Open to opportunities
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="flex mt-4">
                  <span className="text-brand-cyan mr-2">$</span>
                  <span className="animate-pulse">_</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;