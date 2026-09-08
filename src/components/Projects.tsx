import { ExternalLink, Github, Lock, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import sms from '../assets/sms.png';
import pharmacy from '../assets/pharmacy.jpg';
import hackaverse from '../assets/hackaverse.png';
import creative from '../assets/creative.png';
import expense from '../assets/Expense.jpg';
import ict from '../assets/ict.png';
import { useActiveSection } from '../hooks/useActiveSection';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const projects = [
  {
    id: 1,
    title: 'ICT Meetup Platform',
    category: 'FULLSTACK / CMS',
    description: "Built a full-stack CMS and event management platform for Prime IT Club's flagship ICT Meetup. Led a 12-member team, developed RESTful APIs and SQL database structures for managing users and registrations, and delivered both the admin dashboard and public web application.",
    technologies: ['Node.js', 'TypeScript', 'SQL', 'React', 'Tailwind CSS', 'Git'],
    image: ict,
    liveUrl: 'https://ictmeetup.primeitclub.com/',
    githubUrl: 'https://github.com/primeitclub/ict-frontend',
    featured: true,
  },
  {
    id: 2,
    title: 'Study Mate',
    category: 'FULLSTACK',
    description: 'A full-stack collaborative learning and study management platform designed to help students organize academic resources, track tasks, and collaborate effectively.',
    technologies: ['PHP', 'MySQL', 'React', 'Tailwind CSS'],
    image: '',
    liveUrl: '',
    githubUrl: 'https://github.com/Mandipstha-17',
    featured: false,
    inDevelopment: true,
  },
  {
    id: 3,
    title: 'Expense Tracker',
    category: 'MOBILE APP',
    description: 'Developed a cross-platform mobile expense tracking application that allows users to manage and monitor personal expenses. Implemented Firebase auth and cloud data storage, integrated Cloudinary for profile images, and built with React Native & Expo.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Cloudinary'],
    image: expense,
    liveUrl: '',
    githubUrl: 'https://github.com/Mandipstha-17/Expense-Tracker-App',
    featured: false,
  },
  {
    id: 4,
    title: 'CreativeHub Platform',
    category: 'FRONTEND',
    description: 'Built the frontend architecture for the official CreativeHub platform using Next.js and TypeScript, focusing on SSR performance and scalable component design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: creative,
    liveUrl: 'https://creativehub.primeitclub.com/',
    githubUrl: '',
    featured: false,
  },
  {
    id: 5,
    title: 'Student Management System',
    category: 'FULLSTACK',
    description: 'Developed a comprehensive MERN stack application for managing student data, featuring secure authentication and RESTful APIs.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: sms,
    liveUrl: 'https://student-frontend-kappa.vercel.app/admin-summary',
    githubUrl: 'https://github.com/Mandipstha-17/frontend-sms',
    featured: false,
  },
  {
    id: 6,
    title: 'Hackaverse V2',
    category: 'FRONTEND',
    description: 'Contributed to frontend development of the Hackaverse hackathon website, building responsive layouts and optimizing load times.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: hackaverse,
    liveUrl: 'https://hackaversev2.primeitclub.com/',
    githubUrl: '',
    featured: false,
  },
  {
    id: 7,
    title: 'Dil Maina Pharmacy',
    category: 'FRONTEND',
    description: 'Built a responsive digital presence for a local pharmacy to improve customer accessibility and showcase product availability.',
    technologies: ['React', 'Tailwind CSS'],
    image: pharmacy,
    liveUrl: 'https://dil-maina-pharmacy.vercel.app/',
    githubUrl: 'https://github.com/Mandipstha-17/dil-maina-pharmacy',
    featured: false,
  }
];

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const sectionRef = useActiveSection('projects', setActiveSection);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-space text-white mb-4">Selected Works</h2>
          <p className="text-slate-400 font-outfit text-xl max-w-2xl">
            Recent projects demonstrating technical problem-solving and full-stack development capabilities.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project) => {
            if (project.featured) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 relative group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
                  </div>
                  
                  <div className="lg:col-span-5 flex flex-col lg:items-end text-left lg:text-right relative z-10">
                    <span className="text-brand-cyan font-space text-base mb-2 font-medium tracking-wide">{project.category}</span>
                    <h3 className="text-3xl font-bold text-slate-100 font-space mb-4 hover:text-brand-cyan transition-colors">{project.title}</h3>
                    
                    <div className="bg-slate-900/90 backdrop-blur border border-slate-800/80 p-6 rounded-xl shadow-xl mb-4 text-slate-200 font-outfit text-base md:text-lg leading-relaxed lg:-ml-12 relative z-20">
                      <p className="mb-3">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6 lg:justify-end">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-sm md:text-base font-space text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 items-center">
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand-cyan transition-colors"><Github size={24} /></a>
                      ) : (
                        <span className="flex items-center gap-1 text-slate-500 text-sm font-space"><Lock size={16}/> Private</span>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand-cyan transition-colors"><ExternalLink size={24} /></a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }
            return null;
          })}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-xl overflow-hidden hover:-translate-y-2 hover:border-brand-cyan/50 transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900 border-b border-slate-800/60 flex items-center justify-center">
                  {project.image ? (
                    <>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(109,152,134,0.15),transparent)]" />
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-3 text-brand-cyan shadow-inner">
                        <Code2 size={24} />
                      </div>
                      <span className="text-slate-200 font-space font-semibold text-lg">{project.title}</span>
                      <span className="text-brand-cyan/80 font-mono text-xs mt-1 tracking-wider uppercase">Full-Stack Project</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-brand-cyan font-space text-sm font-medium tracking-wide">{project.category}</span>
                      {project.inDevelopment && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-space font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          In Development
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand-cyan transition-colors"><Github size={20} /></a>
                      ) : (
                        <span className="text-slate-500" title="Private Repository"><Lock size={18}/></span>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand-cyan transition-colors"><ExternalLink size={20} /></a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 font-space mb-2 group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                  <p className="text-slate-300 font-outfit text-base mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-sm font-space text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
