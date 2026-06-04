import { useState } from 'react';

const cases = [
  {
    project: 'Gymyg',
    tagline: 'Live Virtual Fitness Platform',
    url: 'https://gymyg.fit',
    color: 'from-violet-500 to-indigo-600',
    stack: ['React Native', 'Daily SDK', 'WebRTC', 'Track Player', 'Swift', 'AVAudioSession', 'Expo EAS'],
    problem: "Moving a WebRTC-based video calling system from web to React Native introduced challenges that appeared in both testing and production. Some errors only surfaced under specific device combinations, network conditions, or timing scenarios — making root cause analysis time-consuming and methodical.\n\nThe deeper issues included race conditions between local music playback via React Native Track Player and live VoIP audio streams, native iOS audio session conflicts causing dropped calls, camera stretching and orientation failures on iOS, and video flickering on Android. These required deep debugging, documentation analysis, and community research to fully resolve.",
    solution: "Rather than working around issues at the React Native layer, I went deeper. I patched the React Native WebRTC library directly to override AVAudioSession mode for the specific audio use case. Proper iOS audio session management was implemented to handle conflicts between music playback and VoIP streams. Platform-specific fixes were applied for camera behavior on iOS and rendering on Android.\n\nThe video calling interface had significant complexity — tile shuffling every few seconds based on active speaker detection, one-on-one sessions running inside an active group call, and parallel one-on-one calls running simultaneously. Each of these introduced edge cases that could cause crashes or degraded experience if not handled precisely.",
    responsibilities: [
      "Migrated the full video calling module from web to React Native using Daily SDK",
      "Patched React Native WebRTC library to override AVAudioSession mode for custom audio handling",
      "Resolved production race conditions between React Native Track Player and live VoIP streams",
      "Fixed native iOS camera stretching, orientation handling, and audio session conflicts",
      "Resolved Android video flickering under real network and device conditions",
      "Built and stabilized active-speaker tile shuffling, one-on-one sessions inside group calls, and parallel calls",
      "Implemented Expo EAS for automated builds and OTA updates — reduced build time 30–40%",
    ],
    results: [
      "20–25% faster load times vs. the web version",
      "Stable live group sessions tested with 20+ concurrent users in real video workout sessions",
      "Significantly reduced crash rate in production",
      "Full feature parity across iOS and Android",
    ],
  },
  {
    project: 'Budget Nest',
    tagline: 'AI-Powered Personal Finance App',
    url: 'https://budget-nest.com',
    color: 'from-emerald-500 to-teal-600',
    stack: ['React Native', 'Expo EAS', 'Swift', 'App Intents Extensions', 'Node.js', 'AI APIs', 'WhatsApp API'],
    problem: "Most finance apps fail at adoption because they require too much manual input. The vision for Budget Nest was to let users log expenses the way they already communicate — through a familiar messaging interface — and have AI handle the rest.\n\nThis introduced two non-trivial technical challenges. First, processing messages containing text, voice, and images required an AI pipeline that could reliably extract structured financial data from unstructured input. Second, SMS-based transaction parsing on iOS is heavily restricted by Apple's privacy framework — building this feature required working within App Intents Extensions, which don't persist by default during Expo prebuild, creating a native module integration problem with no existing documented solution.",
    solution: "Messaging-based expense logging was built as the primary input method, with AI processing handling text, voice transcription, and receipt image extraction to produce structured expense entries automatically.\n\nFor SMS parsing, a privacy-compliant implementation was built using iOS App Intents Extensions in Swift — staying within Apple's security boundaries. Since App Intents Extensions don't survive Expo's prebuild process by default, a custom Expo plugin was developed from scratch to ensure the extension persisted correctly through automated builds, making the feature stable across Expo EAS workflows.",
    responsibilities: [
      "Built full cross-platform app with React Native and Expo for iOS and Android",
      "Implemented messaging-based expense logging supporting text, voice notes, and receipt images processed via AI",
      "Built privacy-compliant SMS transaction parsing using iOS App Intents Extensions in Swift",
      "Developed a custom Expo plugin to persist App Intents Extension through Expo prebuild — no existing solution documented",
      "Designed multi-wallet and budget management architecture for scalable financial data organization",
      "Ensured secure handling of sensitive financial and user data throughout",
    ],
    results: [
      "Zero manual data entry for supported transaction types",
      "Privacy-compliant SMS parsing within Apple's strict iOS security framework",
      "Custom Expo plugin solved a native module persistence problem with no prior documented solution",
      "Multi-wallet and budget system ready for production scale",
    ],
  },
  {
    project: 'HBCUMADE',
    tagline: 'Alumni Networking & Career Platform',
    url: 'https://hbcumade.app',
    color: 'from-orange-500 to-rose-600',
    stack: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe Connect', 'Agora', 'WebSockets', 'OAuth2', 'Eventbrite API'],
    problem: "Owning every complex layer of a community platform simultaneously — backend, database, cloud infrastructure, payments, and third-party integrations — meant the integration surface was unusually wide. Each integration had its own authentication flow, rate limits, webhook behavior, and failure modes that needed to be handled correctly in production.\n\nSecurity was also a real concern — a community platform with user-generated content, financial transactions, and live events needed abuse prevention and rate limiting built in from the start, not added later.",
    solution: "The mobile app was built with React Native for iOS and Android, with a Node.js and MongoDB backend deployed on AWS. Database schemas were designed using outlier and referencing patterns to handle relational community data efficiently at scale.\n\nThird-party integrations were tackled systematically — OAuth2 social auth for Instagram, LinkedIn, and Twitter; API integrations with Eventbrite and Posh for live event imports; Agora for live audio streaming; and Stripe Connect for multi-party event ticketing and creator payouts. Rate limiting and abuse prevention were implemented at the backend level before launch.",
    responsibilities: [
      "Primary engineer — owned backend architecture, all third-party integrations, real-time systems, payments, and AWS infrastructure",
      "Built social feed, groups, direct messaging, and real-time group chat using WebSockets",
      "Implemented live audio streaming and interactive event rooms using Agora",
      "Integrated Instagram, LinkedIn, and Twitter APIs for social auth and cross-platform content sharing",
      "Built event import system pulling live events from Eventbrite and Posh APIs",
      "Developed complete event management and ticketing system with Stripe Connect for multi-party payouts",
      "Deployed and managed backend on AWS including EC2, S3, and IAM configuration",
      "Implemented rate limiting and abuse prevention for community platform security",
    ],
    results: [
      "Complex full-stack platform delivered as primary engineer",
      "Full third-party ecosystem integrated — social auth, event imports, live audio, and payments all in production",
      "Stripe Connect ticketing and payout system with zero payment failures",
      "Rate limiting and abuse prevention implemented before launch",
    ],
  },
  {
    project: 'Famiglia Doro',
    tagline: 'Creator Marketplace, Social Platform & Event Ecosystem',
    url: 'https://famigliadoro.com',
    color: 'from-pink-500 to-purple-600',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'AWS', 'Stripe Connect', 'WebSockets', 'OAuth2'],
    problem: "A platform combining a social network, creator marketplace, and event management system simultaneously is one of the more complex backend challenges to get right. Each layer has its own data relationships and real-time requirements — a social feed with posts, stories, reels, likes, comments, and friend requests needs to feel instant, while e-commerce with multi-state order management, event ticketing with multi-party payment flows, and real-time messaging all need to run reliably under the same infrastructure.",
    solution: "The backend was built with Node.js and Express, with MongoDB handling the data layer using schema patterns designed for the platform's social and commercial complexity. The social layer included posts, stories, reels, likes, comments, and a mutual friend request system backed by efficient APIs designed to handle feed generation at scale.\n\nStripe Connect was integrated for multi-party marketplace payments — handling transactions between creators and the platform with proper payout logic, webhook handling, and order state management. The full backend was deployed on AWS using EC2, S3, and IAM for secure access control.",
    responsibilities: [
      "Designed and built REST APIs for social networking, e-commerce, event management, and content feeds using Node.js",
      "Built complete social layer including posts, stories, reels, likes, comments, and mutual friend request system",
      "Built full e-commerce module including product listings, order management, coupon logic, and multi-state order handling",
      "Integrated Stripe Connect for multi-party marketplace payments, creator payouts, and webhook handling",
      "Built event management and ticketing system with integrated payment flows",
      "Implemented WebSocket-based real-time messaging for one-to-one and group chat",
      "Deployed and managed full AWS infrastructure including EC2, S3, and IAM configuration",
      "Designed MongoDB schema architecture for relational complexity across users, products, orders, and events",
    ],
    results: [
      "Complete backend delivered: social networking, e-commerce, events, and payments",
      "Full social platform live with posts, stories, reels, and friend connections",
      "Stripe Connect payment flows operational with reliable payout handling",
      "Scalable AWS infrastructure configured for production load",
    ],
  },
];

function CaseStudyCard({ c, isOpen, onToggle }) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${isOpen ? 'border-indigo-200 card-shadow-hover' : 'border-slate-100 card-shadow hover:border-indigo-100'}`}>
      <button className="w-full text-left p-6 flex items-start justify-between gap-4" onClick={onToggle}>
        <div className="flex items-start gap-4">
          <div className={`w-1 self-stretch rounded-full bg-gradient-to-b ${c.color} shrink-0`} />
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-slate-900 font-bold text-lg">{c.project}</h3>
              <a href={c.url} target="_blank" rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="text-slate-300 hover:text-indigo-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="text-slate-400 text-sm">{c.tagline}</p>
          </div>
        </div>
        <svg className={`w-5 h-5 text-indigo-400 shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-8 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5 py-4 mb-2">
            {c.stack.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-mono">{tag}</span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">The Problem</h4>
              <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                {c.problem.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <h4 className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">The Solution</h4>
              <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                {c.solution.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <h4 className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">Responsibilities</h4>
              <ul className="space-y-2">
                {c.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                    <span className="text-indigo-400 shrink-0 mt-0.5">▹</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
              <h4 className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">Results</h4>
              <ul className="space-y-1.5">
                {c.results.map((r, i) => (
                  <li key={i} className="flex gap-2 text-slate-700 text-sm font-medium">
                    <span className="text-indigo-500 font-bold shrink-0">✓</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="casestudies" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Deep Dives</p>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h2>
        <p className="text-slate-500 text-base mb-12 max-w-xl">
          What broke, how I debugged it, and what shipped.
        </p>
        <div className="space-y-4">
          {cases.map((c, i) => (
            <CaseStudyCard key={i} c={c} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
