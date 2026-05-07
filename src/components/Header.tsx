import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 pointer-events-none">
      <div className={`transition-all duration-500 mx-auto pointer-events-auto ${isScrolled ? 'max-w-2xl' : 'container md:px-6'}`}>
        <div className={`bg-slate-950/80 backdrop-blur-xl border border-slate-800/60 transition-all duration-500 ${isScrolled ? 'rounded-full px-6 py-3 shadow-lg shadow-black/20' : 'rounded-3xl px-6 py-4'}`}>
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              className={`font-space font-bold text-slate-100 hover:text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              ms.dev
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-slate-800/80 shadow-inner shadow-black/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={handleMenuToggle}
                className="p-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-4 shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;