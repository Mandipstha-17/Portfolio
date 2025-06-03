import { useEffect, useRef } from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home');
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />
      
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/20 to-transparent dark:from-black/20 z-10" />
      
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl z-0 animate-blob" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl z-0 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl z-0 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Mandip Shrestha
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300">
            <span className="relative inline-flex overflow-hidden">
              <span className="animate-type-writer whitespace-nowrap">
                Frontend Developer
              </span>
              <span className="absolute top-0 right-0 w-1 h-full bg-gray-900 dark:bg-gray-100 animate-cursor" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            I create beautiful, responsive, and user-friendly websites 
            with modern technologies and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl dark:shadow-purple-900/20"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-600/10 font-medium rounded-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-30">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            aria-label="Scroll to About section"
          >
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;