import { useState, useEffect } from 'react';

const links = ['About', 'Experience', 'Projects', 'Case Studies', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-bold text-lg tracking-tight gradient-text">ali.dev</a>
        <ul className="hidden md:flex gap-8 text-sm text-slate-500">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(' ', '')}`}
                className="hover:text-indigo-600 transition-colors font-medium">{l}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:aliibraheem8886@gmail.com"
          className="hidden md:block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
          Hire Me
        </a>
        <button className="md:hidden text-slate-500" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg px-6 pb-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} onClick={() => setOpen(false)}
              className="block py-3 text-slate-600 hover:text-indigo-600 transition-colors text-sm border-b border-slate-50 last:border-0 font-medium">
              {l}
            </a>
          ))}
          <a href="mailto:aliibraheem8886@gmail.com"
            className="mt-3 block text-center px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
