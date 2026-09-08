import { useState, useRef, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, CornerDownLeft, RotateCcw } from 'lucide-react';
import {
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiFirebase,
  SiGit,
  SiVercel,
  SiCloudinary,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  color?: string;
}

const terminalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const SKILLS_ROW_1: SkillItem[] = [
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
];

const SKILLS_ROW_2: SkillItem[] = [
  { name: 'RESTful APIs', icon: TbApi, color: '#6D9886' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
];

const MarqueeRow = ({ items, direction = 'left', speed = 28 }: { items: SkillItem[]; direction?: 'left' | 'right'; speed?: number }) => {
  const duplicated = [...items, ...items, ...items, ...items, ...items, ...items];
  const initialX = direction === 'left' ? '0%' : '-50%';
  const animateX = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="flex overflow-hidden select-none py-2">
      <motion.div
        className="flex gap-4 shrink-0"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        }}
      >
        {duplicated.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={`${skill.name}-${idx}`}
              title={skill.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-center p-3 text-slate-200 backdrop-blur-md hover:border-slate-600 hover:bg-slate-800/90 transition-all cursor-default shadow-md group shrink-0"
            >
              <IconComponent size={24} style={{ color: skill.color }} className="shrink-0 transition-transform group-hover:scale-115" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const COMMANDS = ['help', 'about', 'skills', 'projects', 'experience', 'contact', 'hire'];

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useActiveSection('home', setActiveSection);
  const [activeCmd, setActiveCmd] = useState<string>('welcome');
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-brand-cyan font-semibold">Mandip CLI v1.2.0 </p>
          <p className="text-slate-400">Type <span className="text-white font-mono bg-slate-800/80 px-1.5 py-0.5 rounded text-xs">'help'</span> or click the shortcuts below to explore.</p>
        </div>
      )
    }
  ]);

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = 0;
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setActiveCmd('welcome');
      setHistory([
        {
          id: `cmd-${Date.now()}`,
          command: 'welcome',
          output: (
            <div className="text-slate-300 space-y-1">
              <p className="text-brand-cyan font-semibold">Mandip CLI v1.2.0 (interactive)</p>
              <p className="text-slate-400">Type <span className="text-white font-mono bg-slate-800/80 px-1.5 py-0.5 rounded text-xs">'help'</span> or click the shortcuts below to explore.</p>
            </div>
          )
        }
      ]);
      setInputVal('');
      return;
    }

    let resultNode: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        resultNode = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <p className="text-slate-400 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-[90px_1fr] gap-x-2 gap-y-1">
              <span className="text-brand-cyan font-mono font-semibold">about</span>
              <span>Overview & current active role</span>
              <span className="text-brand-cyan font-mono font-semibold">skills</span>
              <span>Core backend, frontend & database stack</span>
              <span className="text-brand-cyan font-mono font-semibold">projects</span>
              <span>Featured full-stack & mobile platforms</span>
              <span className="text-brand-cyan font-mono font-semibold">experience</span>
              <span>Leadership & workshop history</span>
              <span className="text-brand-cyan font-mono font-semibold">contact</span>
              <span>Email, phone, GitHub & LinkedIn</span>
              <span className="text-brand-cyan font-mono font-semibold">hire</span>
              <span>Direct hiring & project inquiries</span>
              <span className="text-slate-400 font-mono font-semibold">clear</span>
              <span>Reset terminal view</span>
            </div>
          </div>
        );
        break;

      case 'about':
        resultNode = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <p className="text-white font-semibold text-sm sm:text-base">Mandip Shrestha — Software Web Developer</p>
            <p className="text-brand-cyan font-medium">• Creative Director @ Prime Creative Hub</p>
            <p className="text-slate-300">• B.Sc. CSIT @ Prime College, Kathmandu</p>
            <p className="text-slate-400 pt-1 leading-relaxed">Specializing in Node.js, RESTful API architecture, database optimization, and modern React interfaces.</p>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <p><span className="text-brand-cyan font-mono font-semibold">Backend:</span> Node.js, Express, RESTful APIs, PHP</p>
            <p><span className="text-brand-cyan font-mono font-semibold">Frontend:</span> React, TypeScript, Next.js, Tailwind CSS</p>
            <p><span className="text-brand-cyan font-mono font-semibold">Databases:</span> MySQL, PostgreSQL, MongoDB, Firebase</p>
            <p><span className="text-brand-cyan font-mono font-semibold">Tools & Cloud:</span> Git, Vercel, cPanel, Cloudinary</p>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <p className="text-slate-400 font-semibold mb-1">Featured Projects:</p>
            <p>1. <span className="text-white font-semibold">ICT Meetup Platform</span> — Full-Stack CMS & Event Portal (12-Dev Lead)</p>
            <p>2. <span className="text-amber-400 font-semibold">Study Mate</span> — PHP • MySQL • React (In Development)</p>
            <p>3. <span className="text-white font-semibold">Expense Tracker</span> — React Native, Expo & Firebase</p>
            <p>4. <span className="text-white font-semibold">CreativeHub Platform</span> — Next.js & TypeScript UI</p>
          </div>
        );
        break;

      case 'experience':
        resultNode = (
          <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <div>
              <p className="text-white font-semibold">• Prime Creative Hub — Creative Director (2025 – Present)</p>
              <p className="text-slate-400 pl-3">Led 6+ coding workshops (15-20 members), 4 major collaborative projects.</p>
            </div>
            <div>
              <p className="text-white font-semibold">• Aarambha Sanskar Vidyalaya — Workshop Facilitator</p>
              <p className="text-slate-400 pl-3">Delivered practical programming & web concepts sessions.</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <p><span className="text-brand-cyan font-mono font-semibold">Email:</span> mandipstha17@gmail.com</p>
            <p><span className="text-brand-cyan font-mono font-semibold">Phone:</span> +977 9813797170</p>
            <p><span className="text-brand-cyan font-mono font-semibold">GitHub:</span> github.com/Mandipstha-17</p>
            <p><span className="text-brand-cyan font-mono font-semibold">LinkedIn:</span> linkedin.com/in/mandip-shrestha-</p>
          </div>
        );
        break;

      case 'hire':
        resultNode = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <p className="text-emerald-400 font-semibold">Available for full-time, contract & project roles.</p>
            <p>• Email: <span className="text-white font-mono">mandipstha17@gmail.com</span></p>
            <p>• Phone: <span className="text-white font-mono">+977 9813797170</span></p>
            <p className="text-slate-400 text-xs mt-1">Direct message or email to connect!</p>
          </div>
        );
        break;

      default:
        resultNode = (
          <div className="text-rose-400 text-xs sm:text-sm">
            Command not recognized: <span className="font-mono text-white">'{cleanCmd}'</span>. Type <span className="text-brand-cyan font-mono font-semibold">'help'</span> for available commands.
          </div>
        );
    }

    setActiveCmd(cleanCmd);
    setHistory([
      {
        id: `cmd-${Date.now()}`,
        command: cleanCmd,
        output: resultNode,
      }
    ]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0 pointer-events-none" />

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Side: Headline & Bio */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-space text-sm font-semibold mb-6 w-fit">
              <Sparkles size={16} />
              <span>Mandip Shrestha — Software Web Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white leading-[1.15] font-space">
              Building web apps <span className="text-brand-cyan">&</span> scalable APIs.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl font-outfit">
              Specializing in Node.js, RESTful API architecture, databases, and modern React interfaces. Experienced in taking products from database schema design to deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 font-space text-base">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-cyan hover:bg-brand-cyan/90 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg shadow-brand-cyan/10 hover:shadow-brand-cyan/20 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-4 border border-slate-700 hover:border-brand-cyan/60 bg-slate-900/60 hover:bg-slate-900 text-slate-200 font-medium rounded-lg transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right Side: Interactive CLI Terminal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={terminalVariants}
            onClick={() => inputRef.current?.focus()}
            className="lg:col-span-6 w-full max-w-lg mx-auto lg:ml-auto rounded-2xl border border-slate-800 bg-slate-950/90 backdrop-blur-xl shadow-2xl flex flex-col h-[440px] overflow-hidden group cursor-text"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/90 select-none">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <Terminal size={14} className="text-brand-cyan" />
                <span>mandip@portfolio: ~ (cli)</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                title="Clear terminal"
                className="text-slate-500 hover:text-slate-300 transition-colors p-1"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Quick Command Suggestion Bar */}
            <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/60 flex items-center gap-1.5 overflow-x-auto text-xs font-mono scrollbar-none select-none">
              <span className="text-slate-500 shrink-0 text-[11px]">Quick:</span>
              {COMMANDS.map((cmd) => (
                <button
                  key={cmd}
                  onClick={(e) => {
                    e.stopPropagation();
                    executeCommand(cmd);
                  }}
                  className={`px-2.5 py-0.5 rounded transition-all shrink-0 border ${
                    activeCmd === cmd
                      ? 'bg-brand-cyan text-slate-950 font-bold border-brand-cyan shadow-sm'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/50 hover:text-brand-cyan'
                  }`}
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Logs / History Stream */}
            <div ref={terminalContainerRef} className="p-4 flex-1 overflow-y-auto space-y-3 font-mono text-xs sm:text-sm text-slate-300">
              {history.map((log) => (
                <div key={log.id} className="space-y-1">
                  {log.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-brand-cyan font-bold">$</span>
                      <span className="text-white font-semibold">{log.command}</span>
                    </div>
                  )}
                  <div className="pl-3 border-l border-slate-800/80 py-0.5">
                    {log.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Active Input Line */}
            <form 
              onSubmit={handleSubmit}
              className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2 shrink-0"
            >
              <span className="text-brand-cyan font-mono font-bold text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. skills, projects)..."
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-1 rounded bg-slate-800 text-slate-400 hover:text-brand-cyan hover:bg-slate-700 transition-colors"
                title="Execute"
              >
                <CornerDownLeft size={14} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Two-Row Bidirectional Skill Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-900/80 relative">
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div className="space-y-2">
            <MarqueeRow items={SKILLS_ROW_1} direction="left" speed={30} />
            <MarqueeRow items={SKILLS_ROW_2} direction="right" speed={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;