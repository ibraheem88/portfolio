import { useEffect, useState } from 'react';

const featured = [
  {
    title: 'Live Activities for incoming calls',
    project: 'Code Huddle',
    stack: ['Swift', 'ActivityKit', 'WidgetKit', 'APNs', 'Expo Modules'],
    body: "A lock screen and Dynamic Island countdown for one on one calls, started from JS when the app is open and through APNs push to start (iOS 17.2+) when it is backgrounded or killed. I owned the ActivityAttributes and ContentState model, the request, update and end lifecycle with duplicate collapse, a custom UNUserNotificationCenter wrapper around Firebase for silent FCM wake, Keychain JWT storage, a URLSession background upload of the push token, the thin Expo native module bridge and the Xcode widget extension.",
    visual: 'island',
  },
  {
    title: 'Music during live calls on iOS',
    project: 'Gymyg',
    stack: ['React Native WebRTC', 'Daily SDK', 'AVAudioSession', 'Track Player'],
    body: "Daily SDK and React Native WebRTC forced an AVAudioSession mode that killed background music in workout classes. I studied Apple docs and GitHub issues, patched React Native WebRTC to override the audio session mode, and resolved race conditions between React Native Track Player and the VoIP stream.",
    visual: 'audio',
  },
];

const more = [
  {
    title: 'Custom Expo config plugin',
    project: 'Budget Nest',
    stack: ['Expo Config Plugins', 'App Intents', 'Swift'],
    body: "Kept native iOS extensions (App Intents) intact through expo prebuild, so the team could stay on the managed Expo workflow without losing native features.",
  },
  {
    title: 'Android memory leak',
    project: 'Code Huddle',
    stack: ['Android Studio Profiler', 'Heap Snapshots'],
    body: "Diagnosed a memory leak with Android Studio Profiler heap snapshots, traced it to its source and fixed it.",
  },
  {
    title: 'React Native 0.74 to 0.82',
    project: 'Code Huddle',
    stack: ['New Architecture', 'React Native'],
    body: "Moved the app to the New Architecture and replaced unmaintained libraries with supported alternatives.",
  },
  {
    title: 'Subscription billing accuracy',
    project: 'Code Huddle',
    stack: ['Google Play Billing', 'Google Cloud Pub/Sub'],
    body: "Routed Google Play subscription events to the backend through Google Cloud Pub/Sub so billing state stays correct.",
  },
];

const START = 180;

function useCountdown() {
  const [left, setLeft] = useState(START);
  useEffect(() => {
    const id = setInterval(() => setLeft(s => (s <= 1 ? START : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, '0');
  const s = String(left % 60).padStart(2, '0');
  return { label: `${m}:${s}`, progress: left / START };
}

function IslandVisual() {
  const { label, progress } = useCountdown();
  return (
    <figure className="relative h-full min-h-[340px] flex flex-col items-center justify-center gap-6 px-6 py-10 bg-[radial-gradient(120%_80%_at_50%_0%,#262A31_0%,#121418_70%)]">
      <div className="flex items-center gap-3 h-11 pl-1.5 pr-4 rounded-full bg-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]" aria-hidden="true">
        <span className="w-8 h-8 rounded-full bg-emerald-500/90 grid place-items-center">
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M15 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3.5l4 3.5V7l-4 3.5z" /></svg>
        </span>
        <span className="text-[13px] text-white/70">One on one</span>
        <span className="text-[15px] font-semibold text-emerald-400 tabular">{label}</span>
      </div>
      <div className="w-full max-w-[300px] rounded-[22px] bg-white/[0.08] backdrop-blur p-4 ring-1 ring-white/10" aria-hidden="true">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-white/60">Incoming call</span>
          <span className="text-[13px] text-white/60">Lock screen</span>
        </div>
        <p className="mt-2 text-white font-semibold">Your one on one starts in</p>
        <p className="font-display text-4xl font-semibold text-white tracking-tight">{label}</p>
        <div className="mt-3 h-1 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full bg-emerald-400 transition-[width] duration-1000 ease-linear" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
      <figcaption className="text-xs text-bone-faint">Illustration of the Live Activity layout</figcaption>
    </figure>
  );
}

const bars = Array.from({ length: 28 }, (_, i) => i);

function AudioVisual() {
  const tracks = [
    { label: 'Workout music', color: '#F6C430', speed: 1.1 },
    { label: 'Live call audio', color: '#7DD3A8', speed: 0.8 },
  ];
  return (
    <figure className="relative h-full min-h-[340px] flex flex-col justify-center gap-7 px-8 py-10 bg-[radial-gradient(120%_80%_at_50%_0%,#262A31_0%,#121418_70%)]">
      {tracks.map((t, ti) => (
        <div key={t.label} aria-hidden="true">
          <p className="text-[13px] text-white/60 mb-3">{t.label}</p>
          <div className="flex items-center gap-[3px] h-14">
            {bars.map(i => (
              <span key={i} className="flex-1 rounded-full origin-center motion-safe:animate-[meter_1.2s_ease-in-out_infinite]"
                style={{
                  backgroundColor: t.color,
                  height: `${30 + ((i * 37 + ti * 53) % 70)}%`,
                  animationDelay: `${-((i * 0.13 + ti * 0.4) % 1.2)}s`,
                  animationDuration: `${t.speed + (i % 5) * 0.12}s`,
                }} />
            ))}
          </div>
        </div>
      ))}
      <figcaption className="text-xs text-bone-faint">Illustration: music and call audio playing at the same time</figcaption>
    </figure>
  );
}

export default function CaseStudies() {
  return (
    <section id="highlights" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-bone text-[clamp(2.5rem,6vw,4.5rem)] max-w-3xl text-balance">Hard problems I solved</h2>
          <p className="max-w-sm text-bone-muted leading-relaxed">What broke, how I worked it out, and what shipped.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {featured.map(f => (
            <article key={f.title} className="rounded-[28px] overflow-hidden bg-ink-raised ring-1 ring-ink-line flex flex-col">
              <div className="h-[340px]">
                {f.visual === 'island' ? <IslandVisual /> : <AudioVisual />}
              </div>
              <div className="p-7 md:p-9 flex-1 flex flex-col">
                <p className="text-sm text-bone-faint">{f.project}</p>
                <h3 className="mt-2 font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-bone text-balance">{f.title}</h3>
                <p className="mt-4 text-bone-muted leading-relaxed text-pretty">{f.body}</p>
                <p className="mt-6 pt-5 border-t border-ink-line text-sm text-bone-faint">{f.stack.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-[28px] bg-ink-raised ring-1 ring-ink-line divide-y divide-ink-line">
          {more.map(m => (
            <article key={m.title} className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-3 md:gap-10 p-7 md:p-9">
              <div>
                <p className="text-sm text-bone-faint">{m.project}</p>
                <h3 className="mt-1.5 font-display text-xl md:text-2xl font-semibold tracking-tight text-bone">{m.title}</h3>
              </div>
              <div>
                <p className="text-bone-muted leading-relaxed text-pretty">{m.body}</p>
                <p className="mt-3 text-sm text-bone-faint">{m.stack.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
