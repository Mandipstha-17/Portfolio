import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import Experience from './components/Experience';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header activeSection={activeSection} />
        <main>
          <Hero setActiveSection={handleSetActive} />
          <About setActiveSection={handleSetActive} />
          <Skills setActiveSection={handleSetActive} />
          <Projects setActiveSection={handleSetActive} />
          <Experience/>
          <Contact setActiveSection={handleSetActive} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;