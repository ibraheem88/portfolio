import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"

function useShutterReveal() {
  useEffect(() => {
    const panels = document.querySelectorAll('.shutter');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('js');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-open');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });
    panels.forEach(p => io.observe(p));
    return () => io.disconnect();
  }, []);
}

function App() {
  useShutterReveal();
  return (
    <div className="min-h-screen bg-ink text-bone">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CaseStudies />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
