// src/components/Projects.tsx
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import sms from '../assets/sms.png';
import tic from '../assets/tic.png';
import upex from '../assets/upex.png';
import pharmacy from '../assets/pharmacy.jpg';
//  certificate images 
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/python.jpg';
import cert5 from '../assets/flutter.png';
import cert6 from '../assets/email.png';
import cert8 from '../assets/React.png';
import cert7 from '../assets/mern.png';
import cert9 from '../assets/NodeJS.png';
import cert10 from '../assets/figma.png';


interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const categories = ['Projects', 'Certificates'] as const;
type Category = (typeof categories)[number];

const projects = [
  
  {
    id: 1,
    title: 'Student Management System (SMS)',
    category: 'Web App',
    description:
      'MERN-based Student Management System with full CRUD operations.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: sms,
    liveUrl: 'https://student-frontend-kappa.vercel.app/admin-summary',
    githubUrl: 'https://github.com/Mandipstha-17/frontend-sms',
  },
 {
  id: 2,
  title: 'Dil Maina Pharmacy Website',
  category: 'Web App',
  description:
    'Responsive frontend website for a local pharmacy, showcasing services and product availability.',
  technologies: ['React', 'Tailwind CSS'],
  image: pharmacy,
  liveUrl: 'https://dil-maina-pharmacy.vercel.app/',
  githubUrl: 'https://github.com/Mandipstha-17/dil-maina-pharmacy',
},
  {
    id: 3,
    title: 'Tic Tac Toe Game',
    category: 'Game',
    description:
      'Classic Tic Tac Toe game implemented using React with interactive UI.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: tic,
    liveUrl: 'https://tic-tac-toe-swart-iota-52.vercel.app/',
    githubUrl: 'https://github.com/Mandipstha-17/tic-tac-toe',
  },
  {
    id: 4,
    title: 'Packers and Movers Website',
    category: 'Web App',
    description:
      'Website for Packers and Movers service with booking system, built with HTML, CSS and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image:upex,
    liveUrl: '',
    githubUrl: 'https://github.com/Mandipstha-17/Packers-and-Movers',
  },
];


const certificates = [
  {
    id: 1,
    image: cert1,
  },
  {
    id: 2,
    image: cert7,
  },
  {
    id:3,
    image: cert3,
  },
   {
    id:4,
    image: cert4,
  },
   {
    id:5,
    image: cert5,
  },
   {
    id:6,
    image: cert6,
  },
   {
    id:7,
    image: cert2,
  },
  {
    id:8,
    image: cert8,
  },
  { 
id:9,
image: cert9,
  },
  {
    id:10,
    image: cert10,
  },

];

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('Projects');

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
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects and certifications, showcasing my
            skills and experience.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeCategory === 'Projects' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          aria-label="Live site"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Certificates 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`Certificate ${cert.id}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
