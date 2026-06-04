const groups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Swift', 'Kotlin'] },
  { label: 'Mobile & Native', items: ['React Native', 'Expo EAS', 'Redux', 'SwiftUI', 'Turbo Modules', 'JSI', 'Hermes Engine', 'Xcode', 'Android Studio', 'App Intents Extensions'] },
  { label: 'Real-Time & Streaming', items: ['WebRTC', 'Daily SDK', 'Agora', 'WebSockets', 'React Native Track Player', 'Push Notifications', 'Deep Linking'] },
  { label: 'Payments & APIs', items: ['Stripe Connect', 'In-App Purchases', 'Square', 'Instagram API', 'LinkedIn API', 'Twitter API', 'Eventbrite API', 'OAuth2', 'REST APIs', 'GraphQL'] },
  { label: 'Backend & Cloud', items: ['Node.js', 'Express.js', 'MongoDB', 'SQLite', 'Firebase', 'Supabase', 'AWS (EC2, S3, IAM, Lambda)', 'Docker'] },
  { label: 'AI & Developer Tools', items: ['OpenAI API', 'Claude API', 'Cursor AI', 'Claude Code', 'GitHub Actions', 'CI/CD', 'Sentry', 'Mixpanel', 'Figma'] },
  { label: 'Testing', items: ['Jest', 'React Native Testing Library'] },
];

const certs = [
  {
    name: 'Programming Fundamentals in Swift',
    issuer: 'Meta',
    date: 'Dec 2025',
    url: 'https://www.coursera.org/account/accomplishments/verify/4RTPG4D9020G',
    description: 'Swift fundamentals including data structures, closures, functions, classes, and structs. Applied to building native iOS modules, App Extensions, and Swift-based integrations within React Native projects.',
  },
  {
    name: 'Generative AI for Software Developers',
    issuer: 'IBM',
    date: 'Nov 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/V25DBWUHTYAO',
    description: 'Generative AI concepts, prompt engineering, and practical integration of AI tools including ChatGPT and GitHub Copilot. Applied to AI mobile app development and AI-assisted workflows using Cursor AI and Claude Code.',
  },
  {
    name: 'Continuous Integration and Continuous Delivery (CI/CD)',
    issuer: 'IBM',
    date: 'Jul 2025',
    url: 'https://www.coursera.org/account/accomplishments/verify/NPCG8ED21K2S',
    description: 'CI/CD pipeline design using GitHub Actions, Tekton, and OpenShift, including automated testing, Infrastructure as Code, and Kubernetes-based deployments. Applied to Expo EAS pipelines that cut App Store submission time by 30-40%.',
  },
  {
    name: 'Advanced Programming in Kotlin',
    issuer: 'Meta',
    date: 'Aug 2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/ZQ588PRA9YH9',
    description: 'Advanced Kotlin including lambda expressions, higher-order functions, extension functions, and collection processing. Applied to writing cleaner Kotlin for native Android modules and React Native bridges.',
  },
  {
    name: 'Architecting Solutions on AWS',
    issuer: 'Amazon Web Services',
    date: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/J3K6FAA54YPL',
    description: 'Designing scalable cloud architectures using API Gateway, Lambda, SQS, SNS, DynamoDB, S3, ECS, IAM, and CloudTrail. Applied to backend infrastructure design and cloud deployment across multiple production mobile apps.',
  },
];

const otherRoles = [
  {
    title: 'Native iOS & Android Module Developer',
    icon: '🔧',
    bullets: [
      "Built privacy-compliant SMS parsing using iOS App Intents Extensions in Swift",
      "Developed custom Expo plugin to persist App Intents Extension during Expo prebuild — no existing solution existed",
      "Resolved native iOS camera, orientation, and audio session issues in production",
      "Patched the React Native WebRTC library to override AVAudioSession mode for a custom real-time audio use case",
    ],
  },
  {
    title: 'App Store & Google Play Release Engineer',
    icon: '🚀',
    bullets: [
      "Reduced build and submission time by 30-40% using Expo EAS automated pipelines",
      "Published and maintained multiple apps on App Store and Google Play",
      "Set up OTA updates via Expo for rapid production fixes without full store resubmission",
      "Implemented Jest and React Native Testing Library for pre-release stability verification",
    ],
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    icon: '☁️',
    bullets: [
      "Deployed and managed EC2 instances with full AWS network config including subnets, security groups, internet gateways, NACLs, and IAM roles",
      "Configured S3 buckets for media storage, static asset delivery, and automated backups",
      "Set up and maintained VPS environments on Hostinger using Linux and Docker",
      "Deployed and maintained MongoDB servers including backup strategies and data integrity management",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Toolkit</p>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {groups.map(g => (
            <div key={g.label}>
              <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg font-medium hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Expertise</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-10">Other Roles</h3>
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {otherRoles.map(r => (
            <div key={r.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-indigo-100 transition-colors">
              <div className="text-2xl mb-3">{r.icon}</div>
              <h4 className="text-slate-900 font-bold text-sm mb-4">{r.title}</h4>
              <ul className="space-y-2">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-slate-500 text-xs leading-relaxed">
                    <span className="text-indigo-400 shrink-0 mt-0.5">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Learning</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h3>
        <div className="space-y-3">
          {certs.map(c => (
            <div key={c.name}
              className="bg-white rounded-2xl p-5 border border-slate-100 card-shadow flex gap-4 hover:border-indigo-100 transition-colors">
              <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                  <p className="text-slate-900 font-semibold text-sm">{c.name}</p>
                  <span className="text-slate-300 text-xs">·</span>
                  <p className="text-indigo-600 text-xs font-semibold">{c.issuer}</p>
                  <span className="text-slate-300 text-xs">·</span>
                  <p className="text-slate-400 text-xs font-mono">{c.date}</p>
                  <a href={c.url} target="_blank" rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-600 text-xs font-semibold transition-colors">
                    View ↗
                  </a>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
