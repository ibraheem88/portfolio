const jobs = [
  {
    title: 'Full-Stack & Mobile Developer',
    company: 'CCRIPT Agency',
    location: 'Islamabad (remote, US clients)',
    period: 'Sep 2026 to Present',
    current: true,
    tags: ['TypeScript', 'Python', 'FastAPI', 'SQL', 'Next.js', 'AI Agents', 'Workflow Automation'],
    bullets: [
      "Architecting invoicing software built to support 18,000+ water hauling truckers for one of the largest US oil and gas supply companies, with a new data schema and FastAPI services using SQL and Alembic migrations.",
      "Built AI agents and agentic workflows that follow up with leads, book appointments and chase signed agreements for a production client.",
      "Built an attorney marketing website from scratch in Next.js, SEO friendly, optimised for Meta ads traffic and compliant with A2P 10DLC requirements for SMS lead follow up.",
    ],
  },
  {
    title: 'Senior React Native Engineer',
    company: 'Code Huddle',
    location: '',
    period: 'Sep 2025 to Sep 2026',
    current: false,
    tags: ['React Native', 'TypeScript', 'Expo EAS', 'Swift', 'WebRTC', 'Daily SDK', 'Next.js', 'Google Cloud Pub/Sub'],
    bullets: [
      "Migrated the video calling module from web to React Native using Daily SDK, achieving 20 to 25% faster load times and stable live sessions with 20+ concurrent users.",
      "Built native iOS Live Activities in Swift (ActivityKit, WidgetKit) for incoming calls, with lock screen and Dynamic Island countdowns, started through APNs push to start even when the app is killed.",
      "Built a custom Expo config plugin to keep native iOS extensions (App Intents) working through prebuild, and patched React Native WebRTC to resolve iOS audio session conflicts between music playback and live calls.",
      "Integrated Google Play subscription events with the backend through Google Cloud Pub/Sub to keep billing state accurate, and contributed to the Next.js trainer platform and admin panel.",
      "Cut App Store and Google Play submission time by 30 to 40% with automated EAS pipelines, and rolled out releases safely through staged OTA updates and feature flags.",
      "Implemented offline first architecture and fixed performance bottlenecks with Xcode Instruments and Android Studio Profiler, including an Android memory leak found through heap snapshots.",
      "Upgraded the app from React Native 0.74 to 0.82 on the New Architecture, replacing unmaintained libraries with supported alternatives.",
    ],
  },
  {
    title: 'Full Stack Mobile Developer',
    company: 'Vizz Web Solutions',
    location: '',
    period: 'Sep 2022 to Aug 2025',
    current: false,
    tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'AWS S3', 'Google Maps', 'Stripe Connect', 'Agora', 'Jest'],
    bullets: [
      "Led full cycle React Native development across 5+ production apps in fitness, social, ecommerce and marketplace domains, owning architecture decisions and direct client communication.",
      "Mentored junior developers and reviewed their code, setting the patterns and quality standards the team followed.",
      "Designed state management and API integration patterns with Redux Toolkit, Redux Thunk and Axios.",
      "Built the Node.js, Express and MongoDB backends behind the apps, covering Stripe Connect payouts and refunds, Socket.IO chat, push notifications and S3 media storage with FFmpeg video processing.",
      "Built a location tracking barber booking app with Google Maps and Apple MapKit, handling location permissions and push notifications.",
      "Integrated Agora live streaming with real time comments and follower notifications, WebSocket messaging, and Stripe, Square and Google Pay payments with in app purchases and subscription billing.",
      "Built offline first apps with SQLite and MongoDB Realm.",
      "Wrote unit and component tests with Jest and React Native Testing Library, and owned App Store and Google Play releases.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-40 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-bone text-[clamp(2.5rem,6vw,4.5rem)] mb-14 md:mb-20">Experience</h2>
        <div className="border-t border-ink-line">
          {jobs.map((job, i) => (
            <article key={i} className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 lg:gap-16 py-12 md:py-16 border-b border-ink-line last:border-b-0">
              <div className="lg:sticky lg:top-28 self-start">
                <p className="flex items-center gap-3 text-sm text-bone-faint tabular">
                  {job.period}
                  {job.current && <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-emerald-400/15 text-emerald-300 text-xs font-semibold">Current</span>}
                </p>
                <h3 className="mt-3 font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-bone text-balance">{job.title}</h3>
                <p className="mt-1.5 text-bone-muted">{job.company}</p>
                {job.location && <p className="mt-0.5 text-sm text-bone-faint">{job.location}</p>}
              </div>
              <div>
                <ul className="space-y-4">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-bone/85 leading-relaxed text-pretty">
                      <span className="mt-[0.75em] h-px w-4 shrink-0 bg-bone/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-bone-faint">{job.tags.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
