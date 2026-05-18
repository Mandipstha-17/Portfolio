import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-slate-700 selection:text-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero setActiveSection={handleSetActive} />
        <Experience setActiveSection={handleSetActive} />
        <Projects setActiveSection={handleSetActive} />
        <About setActiveSection={handleSetActive} />
        <Contact setActiveSection={handleSetActive} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
