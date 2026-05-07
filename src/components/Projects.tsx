import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import sms from '../assets/sms.png';
import tic from '../assets/tic.png';
import upex from '../assets/upex.png';
import pharmacy from '../assets/pharmacy.jpg';
import hackaverse from '../assets/hackaverse.png';
import creative from '../assets/creative.png';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const projects = [
  {
    id: 1,
    title: 'CreativeHub Platform',
    category: 'Full Stack',
    description: 'Engineered the official web platform for CreativeHub, focusing on high-performance SSR and a scalable component architecture.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: creative,
    liveUrl: 'https://creativehub.primeitclub.com/',
    githubUrl: '',
  },
  {
    id: 2,
    title: 'Hackaverse V2',
    category: 'Frontend Architecture',
    description: 'Led the frontend development for the Hackaverse hackathon portal. Implemented complex responsive layouts and optimized load times.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: hackaverse,
    liveUrl: 'https://hackaversev2.primeitclub.com/',
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Full Stack',
    description: 'Developed a comprehensive MERN stack application for managing student data, featuring secure authentication and RESTful APIs.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: sms,
    liveUrl: 'https://student-frontend-kappa.vercel.app/admin-summary',
    githubUrl: 'https://github.com/Mandipstha-17/frontend-sms',
  },
  {
    id: 4,
    title: 'Dil Maina Pharmacy',
    category: 'Frontend',
    description: 'Built a responsive digital presence for a local pharmacy to improve customer accessibility and showcase product availability.',
    technologies: ['React', 'Tailwind CSS'],
    image: pharmacy,
    liveUrl: 'https://dil-maina-pharmacy.vercel.app/',
    githubUrl: 'https://github.com/Mandipstha-17/dil-maina-pharmacy',
  },
  {
    id: 5,
    title: 'Tic Tac Toe Logic',
    category: 'Frontend',
    description: 'Implemented a classic game utilizing React hooks for complex state management and win-condition algorithms.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: tic,
    liveUrl: 'https://tic-tac-toe-swart-iota-52.vercel.app/',
    githubUrl: 'https://github.com/Mandipstha-17/tic-tac-toe',
  },
  {
    id: 6,
    title: 'Packers & Movers Booking',
    category: 'Frontend',
    description: 'Created a static booking interface for a moving service, emphasizing accessible forms and clean semantic HTML/CSS.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: upex,
    liveUrl: '',
    githubUrl: 'https://github.com/Mandipstha-17/Packers-and-Movers',
  },
];

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects');
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setActiveSection]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-slate-950 relative border-t border-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space text-white mb-4">Selected Works</h2>
          <p className="text-slate-400 font-outfit text-lg max-w-2xl">
            Recent projects demonstrating technical problem-solving and full-stack development capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/40 border border-slate-800/60 overflow-hidden hover:border-slate-600 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-[16/10] border-b border-slate-800/60 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-100 hover:bg-white text-slate-900 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                      aria-label="Live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100 font-space group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-outfit flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/60">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-slate-300 font-space tracking-tight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
