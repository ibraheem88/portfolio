const groups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Swift (working level)', 'Kotlin (working level)'] },
  { label: 'Mobile', items: ['React Native', 'Expo', 'EAS', 'React Navigation', 'Reanimated', 'Gesture Handler', 'Native Modules', 'Expo Config Plugins', 'Live Activities (ActivityKit, WidgetKit)', 'App Intents', 'FlashList', 'i18n'] },
  { label: 'State & Data', items: ['Redux Toolkit', 'Redux Thunk', 'TanStack Query', 'Context API', 'Axios', 'MMKV', 'SQLite', 'MongoDB Realm'] },
  { label: 'Real Time & Media', items: ['WebRTC', 'Daily SDK', 'Agora', 'WebSockets', 'Push Notifications (APNs, FCM)'] },
  { label: 'Payments', items: ['Stripe', 'Stripe Connect', 'Square', 'Google Pay', 'In App Purchases', 'Subscription Billing'] },
  { label: 'Maps', items: ['Google Maps', 'Apple MapKit', 'Location Tracking'] },
  { label: 'Web & Backend', items: ['React', 'Next.js', 'Node.js', 'Nest.js', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL (familiar)'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase', 'SQL with Alembic Migrations'] },
  { label: 'Cloud & DevOps', items: ['AWS (EC2, S3, IAM, Elastic Load Balancer, Aurora)', 'Google Cloud Pub/Sub', 'GitHub Actions', 'EAS Build and Submit', 'OTA Updates', 'Staged Rollouts', 'Feature Flags'] },
  { label: 'Security', items: ['Keychain and Keystore Token Storage', 'OAuth2', 'Encrypted API Communication'] },
  { label: 'Monitoring & Debugging', items: ['Sentry', 'Mixpanel', 'Xcode Instruments', 'Android Studio Profiler', 'React Native DevTools'] },
  { label: 'Testing', items: ['Jest', 'React Native Testing Library'] },
  { label: 'AI Tools', items: ['Claude Code', 'Cursor', 'AI Agents', 'Workflow Automation'] },
];

const certs = [
  {
    name: 'Programming Fundamentals in Swift',
    issuer: 'Meta',
    date: 'Dec 2025',
    url: 'https://www.coursera.org/account/accomplishments/verify/4RTPG4D9020G',
    description: 'Swift fundamentals: data structures, closures, functions, classes and structs. I use it for native iOS modules and extensions inside React Native apps.',
  },
  {
    name: 'Generative AI for Software Developers',
    issuer: 'IBM',
    date: 'Nov 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/V25DBWUHTYAO',
    description: 'Generative AI concepts, prompt engineering and using AI tools in day to day development.',
  },
  {
    name: 'Continuous Integration and Continuous Delivery (CI/CD)',
    issuer: 'IBM',
    date: 'Jul 2025',
    url: 'https://www.coursera.org/account/accomplishments/verify/NPCG8ED21K2S',
    description: 'CI/CD pipelines with GitHub Actions, Tekton and OpenShift, automated testing, Infrastructure as Code, and Kubernetes deployments as course practice.',
  },
  {
    name: 'Advanced Programming in Kotlin',
    issuer: 'Meta',
    date: 'Aug 2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/ZQ588PRA9YH9',
    description: 'Lambdas, higher order functions, extension functions and collection processing, used for native Android modules in React Native apps.',
  },
  {
    name: 'Architecting Solutions on AWS',
    issuer: 'Amazon Web Services',
    date: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/J3K6FAA54YPL',
    description: 'Designing scalable cloud architectures on AWS, covering compute, storage, messaging, IAM and monitoring.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-bone text-[clamp(2.5rem,6vw,4.5rem)] mb-14 md:mb-20">Toolkit</h2>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 border-t border-ink-line">
          {groups.map(g => (
            <div key={g.label} className="py-7 border-b border-ink-line">
              <dt className="font-display font-semibold text-bone">{g.label}</dt>
              <dd className="mt-2 text-bone-muted leading-relaxed">{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-24 mb-8 font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-bone">Certifications</h3>
        <ul className="border-t border-ink-line">
          {certs.map(c => (
            <li key={c.name}>
              <a href={c.url} target="_blank" rel="noreferrer"
                className="group grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)_auto] gap-2 md:gap-10 py-6 border-b border-ink-line items-baseline">
                <span>
                  <span className="block text-bone font-medium group-hover:underline underline-offset-4 decoration-bone/40">{c.name}</span>
                  <span className="block mt-1 text-sm text-bone-faint">{c.issuer} · <span className="tabular">{c.date}</span></span>
                </span>
                <span className="text-sm text-bone-muted leading-relaxed text-pretty">{c.description}</span>
                <svg className="hidden md:block w-4 h-4 text-bone-faint group-hover:text-bone transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" /></svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
