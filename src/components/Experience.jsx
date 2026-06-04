const jobs = [
  {
    title: 'Senior Mobile Application Developer',
    company: 'Code Huddle',
    location: 'Pakistan',
    period: 'Sep 2025 – Present',
    current: true,
    bullets: [
      "Migrated WebRTC video calling module from web to React Native using Daily SDK — 20–25% faster load times, stable live group video workout sessions tested with 20+ concurrent users",
      "Patched React Native WebRTC library directly to override AVAudioSession mode — resolved production race conditions between React Native Track Player and live VoIP streams that no off-the-shelf fix addressed",
      "Built complex video calling UI with active-speaker tile shuffling, nested one-on-one sessions inside active group calls, and parallel one-on-one calls — methodically debugging each edge case to production stability",
      "Built privacy-compliant SMS transaction parsing using iOS App Intents Extensions in Swift — staying within Apple's strict security boundaries",
      "Developed a custom Expo plugin from scratch to persist App Intents Extensions through Expo prebuild — no existing documented solution existed",
      "Cut App Store and Google Play submission time by 30–40% using Expo EAS automated pipelines with OTA updates",
      "Implemented offline-first architecture for reliable performance under poor network conditions",
      "Used Cursor AI and Claude Code to accelerate development workflows without compromising code quality",
    ],
  },
  {
    title: 'React Native Developer',
    company: 'Vizz Web Solutions',
    location: 'Rawalpindi, Pakistan',
    period: 'Sep 2022 – Aug 2025',
    current: false,
    bullets: [
      "Delivered full-cycle React Native development across 5+ production apps in fitness, social, e-commerce, and marketplace domains",
      "Integrated third-party SDKs including Stripe, Agora, Square, Facebook, and Mixpanel for payments, real-time communication, and analytics",
      "Built WebSocket-based real-time messaging, push notifications, in-app purchases, and offline-first architecture across multiple client apps",
      "Integrated Agora SDK for real-time live streaming and interactive audio rooms",
      "Implemented Stripe and Square payment flows including in-app purchases and subscription billing",
      "Diagnosed and resolved production crashes and platform-specific issues across live applications using Sentry",
      "Managed the full App Store and Google Play release lifecycle — build configuration, signing, and release management",
      "Developed RESTful APIs using Node.js; wrote unit and component tests with Jest and React Native Testing Library",
    ],
  },
  {
    title: 'Final Year Project — Smart Journalism',
    company: 'COMSATS University Islamabad',
    location: '',
    period: 'Sep 2021 – Jun 2022',
    current: false,
    bullets: [
      "Built a full-stack news mobile app using React Native, Node.js, and MongoDB",
      "Integrated Pusher.js for real-time news updates and Stripe for payment functionality",
      "Trained ML models for sentiment analysis and image forgery detection",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Career</p>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Experience</h2>
        <div className="relative border-l-2 border-slate-200 pl-10 space-y-14">
          {jobs.map((job, i) => (
            <div key={i} className="relative">
              <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-4 ring-slate-50 ${job.current ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-indigo-600 text-xs font-mono bg-indigo-50 px-2.5 py-1 rounded-full">{job.period}</span>
                {job.current && (
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Current</span>
                )}
              </div>
              <h3 className="text-slate-900 font-bold text-xl mt-2 mb-0.5">{job.title}</h3>
              <p className="text-slate-400 text-sm mb-5 font-medium">{job.company}{job.location ? ` · ${job.location}` : ''}</p>
              <ul className="space-y-2.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="text-indigo-400 mt-1 shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
