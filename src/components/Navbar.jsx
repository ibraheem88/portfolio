import { useState, useEffect } from 'react';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-ink-line' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-[15px] tracking-tight text-bone">
          Ali Ibraheem
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-bone-muted">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bone transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="/Ali_Ibraheem_Resume.pdf" target="_blank" rel="noreferrer"
          className="hidden md:inline-flex items-center h-9 px-4 rounded-full bg-bone text-ink text-sm font-semibold hover:bg-white transition-colors">
          Resume
        </a>
        <button className="md:hidden -mr-2 p-2 text-bone" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-bone text-lg font-display border-b border-ink-line">
              {l.label}
            </a>
          ))}
          <a href="/Ali_Ibraheem_Resume.pdf" target="_blank" rel="noreferrer"
            className="mt-5 flex items-center justify-center h-11 rounded-full bg-bone text-ink text-sm font-semibold">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
