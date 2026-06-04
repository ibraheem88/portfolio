const projects = [
  {
    name: 'Gymyg',
    tagline: 'Live Virtual Fitness Platform',
    period: 'Oct 2025 – Present',
    url: 'https://gymyg.fit',
    color: 'from-violet-500 to-indigo-600',
    stack: ['React Native', 'Daily SDK', 'WebRTC', 'Track Player', 'Expo EAS', 'Swift', 'AVAudioSession'],
    bullets: [
      "Migrated full video calling module from web to React Native — 20–25% faster load times, stable with 20+ concurrent users in live video workout sessions",
      "Patched React Native WebRTC library to override AVAudioSession mode — resolved production race conditions between music playback and VoIP streams",
      "Built complex calling UI: active-speaker tile shuffling, one-on-one sessions nested inside group calls, and parallel one-on-one calls running simultaneously",
      "Fixed native iOS camera stretching, orientation failures, and Android video flickering through deep platform debugging",
    ],
    results: ['20–25% faster load times vs. web version', 'Stable with 20+ concurrent users in live video workout sessions', 'Reduced crash rate in production'],
  },
  {
    name: 'Budget Nest',
    tagline: 'AI-Powered Personal Finance App',
    period: 'Nov 2025 – Present',
    url: 'https://budget-nest.com',
    color: 'from-emerald-500 to-teal-600',
    stack: ['React Native', 'Expo EAS', 'Swift', 'App Intents Extensions', 'Node.js', 'AI APIs', 'WhatsApp API'],
    bullets: [
      "WhatsApp-based expense logging — users send text, voice notes, or receipt images and AI extracts structured expense data automatically",
      "Privacy-compliant SMS transaction parsing on iOS using App Intents Extensions in Swift — within Apple's strict security boundaries",
      "Developed a custom Expo plugin from scratch to persist App Intents Extensions through Expo prebuild — no existing documented solution",
      "Multi-wallet and budget management architecture designed for production scale",
    ],
    results: ['Zero manual data entry for supported transaction types', 'Custom Expo plugin solved a native persistence problem with no prior documented solution'],
  },
  {
    name: 'HBCUMADE',
    tagline: 'Alumni Networking & Career Platform',
    period: 'Mar 2024 – Aug 2025',
    url: 'https://hbcumade.app',
    color: 'from-orange-500 to-rose-600',
    stack: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe Connect', 'Agora', 'WebSockets', 'OAuth2'],
    bullets: [
      "Primary engineer across all layers — mobile, backend, AWS infrastructure, and every third-party integration",
      "OAuth2 social auth for Instagram, LinkedIn, and Twitter; live event imports from Eventbrite and Posh APIs",
      "Live audio streaming and real-time group chat using Agora and WebSockets",
      "Complete event ticketing and multi-party payout system via Stripe Connect — zero payment failures in production",
      "Backend deployed on AWS (EC2, S3, IAM) with rate limiting and abuse prevention built in before launch",
    ],
    results: ['Zero payment failures', 'Full third-party ecosystem integrated', 'Rate limiting and abuse prevention live at launch'],
  },
  {
    name: 'Famiglia Doro',
    tagline: 'Creator Commerce & Social Platform',
    period: 'Dec 2024 – Jun 2025',
    url: 'https://famigliadoro.com',
    color: 'from-pink-500 to-purple-600',
    stack: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe Connect', 'WebSockets', 'OAuth2'],
    bullets: [
      "Owned entire backend — API design, database architecture, real-time systems, payments, and AWS deployment",
      "Full social layer: posts, stories, reels, likes, comments, and mutual friend request system",
      "E-commerce module with product listings, order management, coupon logic, and multi-state order handling",
      "Stripe Connect for multi-party creator payouts; WebSocket messaging for one-on-one and group chat",
      "Event management and ticketing system with integrated payment flows",
    ],
    results: ['Complete backend delivered: social, commerce, events, and payments', 'Stripe Connect payouts operational in production'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Work</p>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 border border-slate-100 group flex flex-col">
              <div className={`h-2 bg-gradient-to-r ${p.color}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-slate-900 font-bold text-xl group-hover:text-indigo-600 transition-colors">{p.name}</h3>
                    <p className="text-slate-400 text-xs mt-0.5 font-medium">{p.tagline}</p>
                    <p className="text-indigo-500 text-xs font-mono mt-1">{p.period}</p>
                  </div>
                  <a href={p.url} target="_blank" rel="noreferrer"
                    className="shrink-0 ml-4 p-2 rounded-lg bg-slate-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                      <span className="text-indigo-400 shrink-0 mt-0.5">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-5 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100/80">
                  <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">Results</p>
                  <ul className="space-y-1">
                    {p.results.map((r, j) => (
                      <li key={j} className="text-slate-700 text-xs flex gap-2">
                        <span className="text-indigo-500 font-bold shrink-0">✓</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(tag => (
                    <span key={tag}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-mono hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
