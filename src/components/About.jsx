const paragraphs = [
  "I'm a full stack engineer focused on mobile, with 4+ years of experience shipping iOS and Android apps that people use every day, from live group video and real time chat to payments and native iOS features.",
  "I like owning a product end to end. I've worked directly with founders and clients, turned rough requirements into shipped features, and handled everything from the data model and backend to the app itself and its release pipeline. I care about how each layer of a system works and how it behaves as usage grows, and I make tradeoffs between performance, reliability and delivery speed on purpose rather than by accident.",
  "A lot of my best work happens where there is no ready answer. When something breaks deep in the native layer, I dig through platform docs and source code until I understand it, then fix it properly. I pick up new tools fast, and I enjoy mentoring the people I work with.",
  "Right now I'm a Full-Stack & Mobile Developer at CCRIPT Agency, and I'm open to roles in Europe and beyond.",
];

const facts = [
  { label: 'Education', value: 'BS Computer Science, COMSATS University Islamabad', detail: 'Feb 2018 to Jul 2022' },
  { label: 'Location', value: 'Islamabad, Pakistan', detail: 'Open to relocation' },
  { label: 'Languages', value: 'English (C1), German (A2)' },
];

export default function About() {
  const [lead, ...rest] = paragraphs;
  return (
    <section id="about" className="py-28 md:py-40 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-16 lg:gap-24">
        <div>
          <h2 className="sr-only">About</h2>
          <p className="font-display font-medium text-bone tracking-tight leading-[1.15] text-[clamp(1.75rem,3.4vw,2.75rem)] text-balance">{lead}</p>
          <div className="mt-10 space-y-6 max-w-2xl">
            {rest.map((p, i) => (
              <p key={i} className="text-lg text-bone-muted leading-relaxed text-pretty">{p}</p>
            ))}
          </div>
        </div>
        <dl className="self-end border-t border-ink-line">
          {facts.map(f => (
            <div key={f.label} className="py-5 border-b border-ink-line">
              <dt className="text-sm text-bone-faint">{f.label}</dt>
              <dd className="mt-1 text-bone">{f.value}</dd>
              {f.detail && <dd className="text-sm text-bone-muted">{f.detail}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
