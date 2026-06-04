import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <CaseStudies />
      <Skills />
      <Contact />
      <footer className="py-8 px-6 border-t border-slate-100 text-center bg-white">
        <p className="text-slate-400 text-sm font-mono">Built by Ali Ibraheem · 2026</p>
      </footer>
    </div>
  );
}

export default App;
