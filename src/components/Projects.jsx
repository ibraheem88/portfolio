const projects = [
  {
    name: 'Gymyg',
    tagline: 'Live Group Fitness Platform',
    period: 'Oct 2025 to Sep 2026 · Code Huddle',
    url: 'https://gymyg.fit',
    linkLabel: 'gymyg.fit',
    theme: { bg: '#25302A', fg: '#EEF0E8', muted: '#B3BCAF', line: 'rgba(238,240,232,0.18)' },
    media: 'photo',
    images: [{ src: '/projects/gymyg-trainer.jpg', alt: 'A Gymyg trainer leading a live home workout class with dumbbells' }],
    stack: ['React Native', 'TypeScript', 'Daily SDK', 'React Native WebRTC', 'Track Player', 'Swift', 'Reanimated', 'Next.js', 'MySQL'],
    bullets: [
      "Built a seamless group audio and video training app with one on one sessions inside live classes, exercise timers, active speaker tile shuffling and music playback during calls.",
      "Researched iOS AVAudioSession behaviour through Apple documentation and GitHub issues to run music playback alongside live call audio, where no in house knowledge existed.",
      "Fixed iOS camera stretching, orientation issues and Android video flicker across devices and network conditions.",
      "Implemented feature flags and payments integrated with the MySQL backend, and contributed to the Next.js trainer web platform and admin panel.",
    ],
    results: ['20 to 25% faster load times after migrating video from web', 'Stable live sessions with 20+ concurrent users'],
  },
  {
    name: 'Famiglia Doro',
    tagline: 'Social & Ecommerce Platform',
    period: 'Dec 2024 to Aug 2025',
    url: 'https://apps.apple.com/us/app/famiglia-doro-cs/id6742322083',
    linkLabel: 'App Store',
    theme: { bg: '#F6C430', fg: '#1B1606', muted: '#4A3D12', line: 'rgba(27,22,6,0.18)' },
    media: 'fan',
    images: [
      { src: '/projects/famiglia-ui-reels.jpg', alt: 'Famiglia Doro reels and shorts feed with categories' },
      { src: '/projects/famiglia-ui-profile.jpg', alt: 'Famiglia Doro creator profile with posts, friends and likes' },
      { src: '/projects/famiglia-ui-mall.jpg', alt: 'Famiglia Doro Global Mall product catalog' },
    ],
    stack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'AWS (EC2, S3, IAM)', 'Stripe Connect', 'Socket.IO', 'FFmpeg', 'Google Cloud Pub/Sub'],
    featuresTitle: 'What I built in the backend',
    features: [
      { title: 'Order management', body: "Orders move from processing to received, shipped and delivered. Seller payouts through Stripe Connect are released on delivery, and buyers can cancel with an automatic refund any time before delivery." },
      { title: 'Inventory and coupons', body: "Stock and pricing per size, validated at checkout and updated as orders are placed. Coupons are scoped to products, with usage limits and expiry dates." },
      { title: 'Store, marketplace and affiliates', body: "A brand store and an open marketplace on one catalog. Creators share affiliate links that give buyers a discount, track visits and purchases, and pay out a commission." },
      { title: 'Event ticketing and resale', body: "Ticket types with sold out checks, QR code tickets, attendee lanyard badges and refunds, plus a resale market that keeps the ownership chain of every ticket. Ticketmaster events are imported on a schedule." },
      { title: 'Subscriptions', body: "Apple and Google in app subscriptions with server side receipt validation, renewals and expiry, and Google Play notifications delivered through Cloud Pub/Sub." },
      { title: 'Media pipeline', body: "Uploaded videos are compressed with FFmpeg and given generated thumbnails, HEIC photos are converted, and all media sits on S3 behind presigned URLs." },
    ],
    bullets: [
      "Primary engineer on the React Native app and its Node.js backend, owning the social layer: feed, reels, stories, groups, and real time group chat and direct messages over Socket.IO.",
      "Designed the Express and MongoDB API in clear layers of routes, controllers, services and repositories, spanning social, commerce, events and creator content with premium, pay per view and rental access.",
      "Set up Stripe Connect onboarding and payouts so sellers, event organisers and affiliate creators get paid directly through the app.",
      "Deployed the API on AWS EC2 with media on S3, and protected it with request rate limiting and stricter per user limits on media uploads.",
    ],
    results: ['Zero payment failures in production'],
  },
  {
    name: 'HBCUMADE',
    tagline: 'Community & Events App',
    period: 'Mar 2024 to Aug 2025',
    url: 'https://www.hbcumade.app/',
    linkLabel: 'hbcumade.app',
    theme: { bg: '#9E1B2E', fg: '#FFF4F2', muted: '#F4C9C9', line: 'rgba(255,244,242,0.22)' },
    media: 'fan',
    images: [
      { src: '/projects/hbcumade-feed.jpg', alt: 'HBCUMADE community feed screen' },
      { src: '/projects/hbcumade-explore.jpg', alt: 'HBCUMADE explore screen with upcoming events and highlights' },
      { src: '/projects/hbcumade-profile.jpg', alt: 'HBCUMADE member profile screen' },
    ],
    stack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.IO', 'Agora', 'Stream', 'Stripe Connect', 'Firebase Cloud Messaging', 'AWS S3'],
    bullets: [
      "Primary engineer on a social and event management app with a polished UI, building the React Native app and its Node.js backend, with one collaborator on static screens.",
      "Built the event management module with ticketing, integrating third party platforms such as Eventbrite and writing data models that transform their data to align with our schema.",
    ],
    featuresTitle: 'What I built across the app and backend',
    features: [
      { title: 'Live streaming', body: "Hosts go live through Agora and Stream, and viewers chat in live comments over Socket.IO. Agora webhooks are deduplicated in Redis so followers get exactly one push when a stream starts." },
      { title: 'Events and ticketing', body: "Public and private events with invites, recurring schedules and addresses geocoded through Google. Paid tickets run on Stripe Connect with webhooks and refunds, and guests are checked in with QR codes." },
      { title: 'Social feed', body: "Posts, reels and stories with polls, GIFs, tagging and three privacy levels. Scheduled posts are published by a cron job, and every school and group has its own feed." },
      { title: 'Groups and schools', body: "Groups with join requests and admin approval, a directory of HBCU schools, and a news feed pulled from a news API." },
      { title: 'Messaging and notifications', body: "One to one and group chat over Socket.IO with unread counts per room and voice messages, plus Firebase push and topic notifications." },
      { title: 'Sign in and connected accounts', body: "Sign in with Apple, Google, Facebook, LinkedIn and X, email validation at signup, and Instagram connected to profiles with long lived tokens." },
    ],
    results: [],
  },
  {
    name: 'Budget Nest',
    tagline: 'Personal Finance & Budgeting App',
    period: 'Nov 2025 to Jan 2026 · Code Huddle',
    url: 'https://www.budget-nest.com/',
    linkLabel: 'budget-nest.com',
    theme: { bg: '#DDF3E7', fg: '#0D2B1F', muted: '#2F5A47', line: 'rgba(13,43,31,0.16)' },
    media: 'render',
    images: [{ src: '/projects/budget-nest-voice.png', alt: 'Budget Nest home, voice expense logging and add record screens' }],
    stack: ['React Native', 'Expo', 'Swift', 'App Intents'],
    bullets: [
      "Built a custom Expo config plugin so the iOS App Intents extension survives prebuild, enabling Siri and Shortcuts style actions from a React Native app.",
      "Built SMS transaction parsing on iOS with App Intents in Swift, staying inside Apple's privacy rules.",
      "Expense logging from text, voice notes and receipt photos, with AI turning each message into a structured entry, plus multiple wallets and budgets.",
    ],
    results: [],
  },
];

function Media({ p }) {
  const [a] = p.images;
  if (p.media === 'photo') {
    return (
      <div className="overflow-hidden rounded-[20px] aspect-[4/3]">
        <img src={a.src} alt={a.alt} loading="lazy" className="shutter-media w-full h-full object-cover" />
      </div>
    );
  }
  if (p.media === 'render') {
    return <img src={a.src} alt={a.alt} loading="lazy" className="shutter-media w-full max-w-[560px] mx-auto drop-shadow-[0_30px_40px_rgba(13,43,31,0.18)]" />;
  }
  if (p.media === 'fan') {
    const [left, centre, right] = p.images;
    const shot = 'rounded-[20px] md:rounded-[24px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]';
    return (
      <div className="shutter-media relative h-[440px] sm:h-[560px] flex items-center justify-center">
        <img src={left.src} alt={left.alt} loading="lazy" className={`absolute w-[38%] max-w-[220px] ${shot} -rotate-6 -translate-x-[60%] translate-y-6`} />
        <img src={right.src} alt={right.alt} loading="lazy" className={`absolute w-[38%] max-w-[220px] ${shot} rotate-6 translate-x-[60%] translate-y-6`} />
        <img src={centre.src} alt={centre.alt} loading="lazy" className={`relative w-[44%] max-w-[250px] ${shot}`} />
      </div>
    );
  }
  return null;
}

function Features({ p }) {
  const t = p.theme;
  return (
    <div className="mt-12">
      <h4 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{p.featuresTitle}</h4>
      <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 border-t" style={{ borderColor: t.line }}>
        {p.features.map(f => (
          <div key={f.title} className="py-5 border-b" style={{ borderColor: t.line }}>
            <dt className="font-display font-semibold tracking-tight">{f.title}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-pretty" style={{ color: t.muted }}>{f.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function Results({ p }) {
  if (!p.results.length) return null;
  return (
    <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t" style={{ borderColor: p.theme.line }}>
      {p.results.map(r => (
        <p key={r} className="font-display font-semibold text-base md:text-lg tracking-tight">{r}</p>
      ))}
    </div>
  );
}

function Bullets({ p }) {
  return (
    <ul className="space-y-4 max-w-xl">
      {p.bullets.map((b, j) => (
        <li key={j} className="flex gap-4 text-[15px] md:text-base leading-relaxed text-pretty">
          <span className="mt-[0.7em] h-px w-4 shrink-0" style={{ backgroundColor: p.theme.fg, opacity: 0.5 }} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function VisitLink({ p }) {
  return (
    <a href={p.url} target="_blank" rel="noreferrer"
      className="mt-9 inline-flex items-center gap-2 h-11 px-5 rounded-full font-semibold text-sm transition-opacity hover:opacity-85"
      style={{ backgroundColor: p.theme.fg, color: p.theme.bg }}>
      {p.linkLabel}
      <Arrow />
    </a>
  );
}

function ProjectPanel({ p, i }) {
  const t = p.theme;
  const flip = i % 2 === 1;
  return (
    <article className="shutter mx-2 md:mx-4 rounded-[24px] md:rounded-[32px] overflow-clip" style={{ backgroundColor: t.bg, color: t.fg }}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 ${p.features ? 'items-start' : 'items-center'}`}>
        <div className={flip ? 'lg:order-2' : 'lg:order-1'}>
          <p className="text-sm tabular" style={{ color: t.muted }}>{p.period}</p>
          <h3 className="mt-4 font-display font-bold tracking-tightest leading-[0.95] text-[clamp(2.75rem,6vw,4.5rem)]">{p.name}</h3>
          <p className="mt-3 font-display text-xl md:text-2xl font-medium tracking-tight" style={{ color: t.muted }}>{p.tagline}</p>

          <div className="mt-9"><Bullets p={p} /></div>
          <Results p={p} />
          {p.features && <Features p={p} />}

          <p className="mt-8 text-sm leading-relaxed max-w-xl" style={{ color: t.muted }}>{p.stack.join(' · ')}</p>

          <VisitLink p={p} />
        </div>
        <div className={`order-first ${flip ? 'lg:order-1' : 'lg:order-2'} ${p.features ? 'lg:sticky lg:top-24' : ''}`}>
          <Media p={p} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pt-28 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-bone text-[clamp(2.5rem,6vw,4.5rem)]">Selected work</h2>
        <p className="max-w-sm text-bone-muted leading-relaxed">Four apps I've worked on, and what I built on each.</p>
      </div>
      <div className="space-y-2 md:space-y-4">
        {projects.map((p, i) => <ProjectPanel key={p.name} p={p} i={i} />)}
      </div>
    </section>
  );
}
