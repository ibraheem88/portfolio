const services = [
  {
    title: 'React Native App Development',
    icon: '📱',
    desc: 'Cross-platform iOS and Android apps using Expo and React Native CLI — built for production stability, not just demos.',
  },
  {
    title: 'Full-Stack Mobile Development',
    icon: '⚡',
    desc: 'React Native on the front, Node.js + MongoDB on the back — one developer owning the full product without coordination overhead.',
  },
  {
    title: 'AI Mobile App Development',
    icon: '🤖',
    desc: 'ChatGPT and Claude API integration for chatbots, voice assistants, and intelligent workflows — AI built in from day one, not bolted on later.',
  },
  {
    title: 'Native & Third-Party Integrations',
    icon: '🔌',
    desc: 'The integrations most developers avoid — WebRTC, Agora, Stripe Connect, Instagram, LinkedIn, Twitter, OAuth2, deep linking.',
  },
];

export default function Hero() {
  return (
    <section id="about" className="pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-white to-violet-50/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-indigo-600 text-xs font-semibold tracking-wide uppercase">React Native Engineer · 4+ Years</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-[0.95] tracking-tight mb-6">
            Ali<br />
            <span className="gradient-text">Ibraheem</span>
          </h1>

          <p className="text-slate-700 text-xl leading-relaxed mb-4 max-w-2xl font-medium">
            I build and ship production React Native apps for iOS and Android — specializing in native integrations, real-time systems, and the hard engineering problems most developers avoid.
          </p>
          <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-2xl">
            Known for going deep when it matters — patching libraries at the native level, building custom Expo plugins with no existing documentation, and solving complex engineering challenges end-to-end. Passionate about crafting seamless mobile experiences and working in fast-moving teams where ownership and technical quality matter.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-indigo-200">
              View Projects
            </a>
            <a href="#casestudies"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-semibold rounded-xl transition-colors text-sm shadow-sm">
              Read Case Studies
            </a>
            <a href="#contact"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-semibold rounded-xl transition-colors text-sm shadow-sm">
              Get In Touch
            </a>
          </div>

          <div className="flex gap-5">
            <a href="https://linkedin.com/in/ali-ibraheem-b1260222a" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">LinkedIn</a>
            <span className="text-slate-200">|</span>
            <a href="https://github.com/ibraheem88" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">GitHub</a>
            <span className="text-slate-200">|</span>
            <a href="mailto:aliibraheem8886@gmail.com"
              className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">Email</a>
          </div>
        </div>

        <div>
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6">What I Build</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(s => (
              <div key={s.title}
                className="bg-white rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-slate-100 hover:border-indigo-100">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="text-slate-900 font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
