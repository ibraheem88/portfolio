const links = [
  { label: 'LinkedIn', value: 'ali-ibraheem', href: 'https://linkedin.com/in/ali-ibraheem-b1260222a' },
  { label: 'GitHub', value: 'ibraheem88', href: 'https://github.com/ibraheem88' },
  { label: 'Resume', value: 'PDF', href: '/Ali_Ibraheem_Resume.pdf' },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-28 md:pt-40 pb-16 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-bone text-[clamp(2.75rem,7vw,6rem)] max-w-4xl text-balance">
          Let's build something people use every day.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-bone-muted leading-relaxed">
          Open to senior mobile engineering roles in Europe and beyond, remote or on site. Based in Islamabad, Pakistan and open to relocation.
        </p>
        <a href="mailto:aliibraheem888@outlook.com"
          className="mt-12 inline-flex items-center gap-3 font-display font-semibold tracking-tight text-bone text-[clamp(1.4rem,3.6vw,2.5rem)] link-underline decoration-bone/30 hover:decoration-bone transition-colors break-all">
          aliibraheem888@outlook.com
        </a>

        <ul className="mt-16 grid sm:grid-cols-3 border-t border-ink-line">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer"
                className="group flex items-center justify-between py-6 sm:pr-8 border-b border-ink-line">
                <span>
                  <span className="block text-sm text-bone-faint">{l.label}</span>
                  <span className="block mt-1 text-bone group-hover:underline underline-offset-4 decoration-bone/40">{l.value}</span>
                </span>
                <svg className="w-4 h-4 text-bone-faint group-hover:text-bone transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" /></svg>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-24 flex flex-col sm:flex-row gap-2 justify-between text-sm text-bone-faint">
          <p>Ali Ibraheem · 2026</p>
          <a href="#top" className="hover:text-bone transition-colors">Back to top</a>
        </footer>
      </div>
    </section>
  );
}
