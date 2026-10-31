// Set to a file in /public (for example '/ali-portrait.jpg') to show a portrait in the hero.
const portrait = null;

const stats = [
  { value: '20 to 25%', label: 'Faster load times after moving live video from web to React Native' },
  { value: '20+', label: 'Concurrent users in stable live video sessions' },
  { value: '30 to 40%', label: 'Faster App Store and Google Play submissions' },
  { value: 'Zero', label: 'Payment failures in production with Stripe Connect' },
  { value: '5+', label: 'Production apps led at Vizz Web Solutions' },
  { value: '18,000+', label: "Truckers supported by the invoicing system I'm architecting" },
];

const screens = [
  { src: '/projects/famiglia-ui-reels.jpg', alt: 'Famiglia Doro reels screen', className: '-rotate-[9deg] -translate-x-[82%] translate-y-10' },
  { src: '/projects/famiglia-ui-mall.jpg', alt: 'Famiglia Doro Global Mall screen', className: 'rotate-[9deg] translate-x-[82%] translate-y-10' },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-10 items-center">
        <div>
          <p className="flex items-center gap-2.5 text-sm text-bone-muted mb-8">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Open to roles in Europe and beyond
          </p>
          <h1 className="font-display font-bold text-bone tracking-tightest leading-[0.92] text-[clamp(3.5rem,9vw,6rem)]">
            Ali Ibraheem
          </h1>
          <p className="mt-5 font-display text-2xl md:text-[1.75rem] font-medium text-bone-muted tracking-tight">
            Senior Full Stack Mobile Engineer
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/85 text-pretty">
            I build full stack products with a mobile focus: React Native apps for iOS and Android, the web apps, APIs and databases behind them, and the AWS infrastructure they run on.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-bone text-ink font-semibold hover:bg-white transition-colors">
              View projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" /></svg>
            </a>
            <a href="/Ali_Ibraheem_Resume.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center h-12 px-6 rounded-full border border-bone/25 text-bone font-semibold hover:border-bone/60 transition-colors">
              Download resume
            </a>
            <a href="#contact" className="inline-flex items-center h-12 px-3 text-bone-muted hover:text-bone link-underline decoration-bone/30 transition-colors">
              Contact
            </a>
          </div>
          <p className="mt-10 text-sm text-bone-faint">4+ years · Islamabad, Pakistan · Open to relocation</p>
        </div>

        <div className="relative h-[440px] sm:h-[520px] flex items-center justify-center" aria-hidden={!portrait}>
          {screens.map(s => (
            <img key={s.src} src={s.src} alt="" loading="eager"
              className={`absolute z-10 w-[38%] max-w-[210px] rounded-[22px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 ${s.className}`} />
          ))}
          {portrait ? (
            <img src={portrait} alt="Ali Ibraheem"
              className="relative w-[46%] max-w-[260px] aspect-[3/4] object-cover rounded-[26px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10" />
          ) : (
            <img src="/projects/gymyg-live-workouts.jpg" alt=""
              className="relative w-[44%] max-w-[230px] aspect-[840/1836] object-cover object-center rounded-[24px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10" />
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <dl className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 border-t border-ink-line">
          {stats.map(s => (
            <div key={s.label} className="py-7 pr-6 border-b border-ink-line xl:border-b-0">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display font-semibold text-3xl md:text-[2rem] tracking-tight text-bone">{s.value}</span>
                <span className="mt-2 block text-sm leading-snug text-bone-muted text-pretty">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
