"use client";

import { useState, type ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ---------- tiny inline icons ---------- */
const Icon = ({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    {children}
  </svg>
);
const Chevron = ({ className = "h-4 w-4" }: { className?: string }) => (
  <Icon className={className}><path d="m9 6 6 6-6 6" /></Icon>
);
const Sparkles = ({ className = "h-5 w-5" }: { className?: string }) => (
  <Icon className={className}>
    <path d="M10 4l1.6 4.4L16 10l-4.4 1.6L10 16l-1.6-4.4L4 10l4.4-1.6z" />
    <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
  </Icon>
);

/* ---------- data ---------- */
const nav = [
  { label: "Dashboard", active: true, icon: <Icon><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" /></Icon> },
  { label: "Workouts", icon: <Icon><path d="M3 12h2m14 0h2M6 8v8m12-8v8M9 6v12m6-12v12M9 12h6" /></Icon> },
  { label: "Loot", badge: 3, icon: <Icon><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12M12 8c-2 0-4-1-4-3a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 2-2 3-4 3z" /></Icon> },
  { label: "Profile", icon: <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></Icon> },
];

const moods = [
  { label: "Drained", glyph: <path d="M5 12a7 7 0 0 1 14 0z" fill="currentColor" /> },
  { label: "A bit tired", glyph: <><circle cx="12" cy="12" r="7" /><path d="M12 5a7 7 0 0 1 0 14z" fill="currentColor" /></> },
  { label: "Ready to go", glyph: <circle cx="12" cy="12" r="3" fill="currentColor" /> },
];

const bars = [
  { d: "M", h: 48 }, { d: "T", h: 76 }, { d: "W", h: 56 }, { d: "T", h: 100, hot: true },
  { d: "F", h: 66 }, { d: "S", h: 34 }, { d: "S", h: 16 },
];

const loot = [
  { name: "Iron Will", sub: "Epic title", glyph: "M", tone: "bg-violet-500/15 text-violet-300" },
  { name: "Streak III", sub: "Rare badge", glyph: "III", tone: "bg-teal-500/15 text-teal-300" },
];

const card = "rounded-3xl border border-white/[.07] bg-[#15151b]";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500";

export default function Home() {
  const [mood, setMood] = useState<string | null>(null);

  return (
    <div className={`${font.className} flex min-h-screen bg-[#0b0b12] text-zinc-100`}>
      {/* ================= Sidebar ================= */}
      <aside className="sticky top-0 hidden h-screen w-[200px] shrink-0 flex-col border-r border-white/[.07] px-3 py-6 lg:flex">
        <div className="mb-8 flex items-center gap-2.5 px-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-lime-300/30 bg-lime-300/10 text-lime-300">
            <Icon><path d="M13 3 5 14h6l-1 7 8-11h-6z" /></Icon>
          </span>
          <span className="text-xl font-extrabold tracking-tight">
            LOOT<span className="text-lime-300">DROP</span>
          </span>
        </div>

        <nav className="flex flex-col gap-1.5">
          {nav.map((n) => (
            <a
              key={n.label}
              href="#"
              className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-[15px] font-semibold transition-colors ${
                n.active
                  ? "bg-[#14141c] text-white ring-2 ring-blue-500/70 ring-offset-0"
                  : "text-zinc-400 hover:bg-white/[.04] hover:text-zinc-200"
              }`}
            >
              <span className={n.active ? "text-lime-300" : ""}>{n.icon}</span>
              {n.label}
              {n.badge && (
                <span className="ml-auto grid h-6 w-6 place-items-center rounded-full bg-violet-500 text-xs font-bold text-white">
                  {n.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <div className="rounded-2xl border border-white/[.07] bg-[#15151b] p-4">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="uppercase tracking-wider text-lime-300">Level 18</span>
              <span className="text-zinc-400">2,840 / 3,200 XP</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-lime-300" style={{ width: "88.75%" }} />
            </div>
            <p className="mt-3 text-sm text-zinc-500">360 XP to level up</p>
          </div>

          <div className="flex items-center gap-3 border-t border-white/[.07] pt-4">
            <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-violet-500/15 text-sm font-bold text-zinc-200">
              AK
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0b0b12] bg-lime-300" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Alex Kim</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-violet-400">Iron Will</p>
            </div>
            <button aria-label="Account menu" className="text-zinc-500 hover:text-zinc-300">
              <Icon className="h-5 w-5"><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></Icon>
            </button>
          </div>
        </div>
      </aside>

      {/* ================= Main ================= */}
      <main className="mx-auto w-full max-w-[1100px] flex-1 px-6 py-10 lg:px-12">
        {/* Header */}
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className={eyebrow}>Monday, May 26</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-[44px] sm:leading-[1.1]">Ready to level up?</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-zinc-400">
              <Icon className="h-6 w-6 text-orange-400"><path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z" /></Icon>
              <span className="text-2xl font-bold text-white">12</span>
              <span className="text-lg">day streak</span>
            </div>
            <button className="flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3.5 text-[15px] font-bold text-zinc-900 shadow-[0_0_30px_-6px] shadow-lime-300/50 transition hover:bg-lime-200">
              <Icon className="h-5 w-5"><path d="M12 5v14M5 12h14" /></Icon>
              Log workout
            </button>
          </div>
        </header>

        {/* Hero row */}
        <section className="mt-9 grid gap-5 xl:grid-cols-[2.3fr_1fr]">
          {/* Today's quest */}
          <div className={`${card} relative overflow-hidden p-8`}>
            <div className="relative z-10 max-w-md">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                Today&apos;s quest
              </p>
              <h2 className="mt-8 text-5xl font-bold leading-none tracking-tight">Push Day: Power</h2>
              <p className="mt-4 text-lg text-zinc-400">Chest, shoulders &amp; triceps</p>

              <dl className="mt-8 flex gap-8">
                {[
                  ["Target", "6 exercises", ""],
                  ["Est. time", "55 min", ""],
                  ["Reward", "+320 XP", "text-lime-300"],
                ].map(([k, v, c]) => (
                  <div key={k}>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{k}</dt>
                    <dd className={`mt-1.5 text-[17px] font-semibold ${c}`}>{v}</dd>
                  </div>
                ))}
              </dl>

              <button className="mt-9 flex items-center gap-2 rounded-2xl bg-lime-300 px-6 py-4 text-[15px] font-bold text-zinc-900 transition hover:bg-lime-200">
                Start workout <Chevron />
              </button>
            </div>

            {/* barbell illustration */}
            <svg viewBox="0 0 400 400" className="pointer-events-none absolute -right-8 top-1/2 hidden h-[110%] -translate-y-1/2 md:block" aria-hidden>
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7c5cf0" stopOpacity=".35" />
                  <stop offset="100%" stopColor="#7c5cf0" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="190" fill="url(#glow)" />
              <ellipse cx="215" cy="200" rx="170" ry="150" fill="none" stroke="#7c5cf0" strokeOpacity=".35" />
              <ellipse cx="195" cy="205" rx="150" ry="170" fill="none" stroke="#7c5cf0" strokeOpacity=".25" transform="rotate(-20 195 205)" />
              <circle cx="190" cy="200" r="105" fill="#1d1a3a" stroke="#8b6cf0" strokeWidth="5" />
              <circle cx="190" cy="200" r="55" fill="none" stroke="#8b6cf0" strokeOpacity=".5" strokeWidth="2" />
              <g transform="rotate(-22 200 205)">
                <rect x="20" y="198" width="360" height="9" rx="4" fill="#c9c9d6" />
                <rect x="130" y="158" width="30" height="90" rx="6" fill="#6d4fdc" />
                <rect x="165" y="152" width="30" height="102" rx="6" fill="#7c5cf0" />
                <rect x="200" y="158" width="30" height="90" rx="6" fill="#6d4fdc" />
              </g>
              <path d="M70 70l8 14 14 8-14 8-8 14-8-14-14-8 14-8z" fill="none" stroke="#8b6cf0" />
              <path d="M340 90l6 12 12 6-12 6-6 12-6-12-12-6 12-6z" fill="#8b6cf0" />
            </svg>
          </div>

          {/* AI coach */}
          <div className={`${card} flex flex-col p-6`}>
            <div className="flex items-center gap-4">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-violet-400/30 bg-violet-500/15 text-violet-300">
                <Sparkles className="h-6 w-6" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#15151b] bg-lime-300" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-violet-400">AI coach</p>
                <h3 className="mt-1 text-xl font-semibold">How are you feeling?</h3>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">
              I&apos;ll tune today&apos;s workout to match your energy and recovery.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2.5" role="radiogroup" aria-label="Energy level">
              {moods.map((m) => {
                const on = mood === m.label;
                return (
                  <button
                    key={m.label}
                    role="radio"
                    aria-checked={on}
                    onClick={() => setMood(m.label)}
                    className={`flex flex-col items-center gap-3 rounded-2xl border px-2 py-4 text-xs transition ${
                      on
                        ? "border-violet-400/60 bg-violet-500/15 text-white"
                        : "border-white/[.07] bg-white/[.02] text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-zinc-300">{m.glyph}</Icon>
                    {m.label}
                  </button>
                );
              })}
            </div>

            <button className="mt-auto flex items-center justify-center gap-1.5 pt-6 text-sm text-zinc-300 hover:text-white">
              Or chat with coach <Chevron className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* Lower row */}
        <section className="mt-10 grid gap-10 xl:grid-cols-[2.3fr_1fr]">
          {/* Left column */}
          <div>
            <div className="flex items-end justify-between">
              <div>
                <p className={eyebrow}>Your progress</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Weekly activity</h2>
              </div>
              <button className="pb-1 text-sm text-zinc-400 hover:text-zinc-200">This week ⌄</button>
            </div>

            <div className={`${card} mt-5 grid gap-6 p-8 sm:grid-cols-[auto_1fr]`}>
              <div className="grid grid-cols-2 content-center gap-x-10 gap-y-8 sm:w-[300px]">
                <Stat value="4" label="Workouts" />
                <Stat value="3h 42m" label="Training time" />
                <Stat value="18,460" label="Volume (kg)" />
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex h-[210px] items-end gap-4 border-b border-white/[.07] pb-0 pl-2">
                  {bars.map((b, i) => (
                    <div key={i} className="flex flex-1 flex-col justify-end">
                      <div
                        className={`w-full rounded-t-md ${b.hot ? "bg-gradient-to-b from-lime-300 to-lime-600 shadow-[0_0_24px_-4px] shadow-lime-300/50" : "bg-white/[.12]"}`}
                        style={{ height: `${b.h * 1.6}px` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-4 pl-2 text-xs text-zinc-500">
                  {bars.map((b, i) => (
                    <span key={i} className="flex-1 text-center">{b.d}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-end justify-between">
              <div>
                <p className={eyebrow}>History</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Recent workouts</h2>
              </div>
              <a href="#" className="flex items-center gap-1 pb-1 text-sm text-zinc-400 hover:text-zinc-200">
                View all <Chevron className="h-3.5 w-3.5" />
              </a>
            </div>
            <ul className="mt-5 border-t border-white/[.07]">
              <li className="flex items-center gap-4 py-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon className="h-3 w-3"><path d="M12 3l6 9-6 9-6-9z" fill="currentColor" /></Icon>
                </span>
                <div className="flex-1">
                  <p className="font-semibold">Upper Power</p>
                  <p className="text-sm text-zinc-500">6 exercises · 48 min</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">8,240 kg</p>
                  <p className="text-sm text-zinc-500">total volume</p>
                </div>
                <Chevron className="h-4 w-4 text-zinc-500" />
              </li>
            </ul>
          </div>

          {/* Rewards column */}
          <div className="xl:-mt-1 xl:border-l xl:border-white/[.07] xl:pl-8">
            <div className="flex items-end justify-between">
              <div>
                <p className={eyebrow}>Rewards</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Recent loot</h2>
              </div>
              <a href="#" className="flex items-center gap-1 pb-1 text-sm text-zinc-400 hover:text-zinc-200">
                Inventory <Chevron className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className={`${card} relative mt-5 flex flex-col items-center overflow-hidden px-6 pb-14 pt-8 text-center`}>
              <svg viewBox="0 0 240 150" className="h-[150px] w-[240px]" aria-hidden>
                <path d="M120 5l110 70-110 70L10 75z" fill="none" stroke="#7c5cf0" strokeOpacity=".3" />
                <rect x="70" y="20" width="100" height="46" rx="8" fill="#2a2450" stroke="#8b6cf0" strokeWidth="2" />
                <rect x="72" y="66" width="96" height="56" rx="8" fill="#2a2450" stroke="#8b6cf0" strokeWidth="2" />
                <path d="M120 36l5 5-5 5-5-5z" fill="none" stroke="#c4b5fd" strokeWidth="1.5" />
                <path d="M120 80l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#c4b5fd" />
              </svg>
              <p className="-mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">Epic drop</p>
              <h3 className="mt-1 text-xl font-semibold">Unclaimed reward</h3>
              <p className="mt-1 text-xs text-zinc-400">Earned for a new bench press PR</p>
              <button className="mt-5 flex items-center gap-2 rounded-xl border border-violet-400/50 bg-violet-500/10 px-5 py-3 text-sm font-bold text-violet-200 transition hover:bg-violet-500/20">
                Open drop <Sparkles className="h-4 w-4" />
              </button>
            </div>

            <ul className="mt-6 space-y-1">
              {loot.map((l) => (
                <li key={l.name} className="flex items-center gap-4 rounded-xl py-2.5">
                  <span className={`grid h-14 w-14 place-items-center rounded-xl text-lg font-semibold ${l.tone}`}>{l.glyph}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{l.name}</p>
                    <p className="text-sm text-zinc-500">{l.sub}</p>
                  </div>
                  <Chevron className="h-4 w-4 text-zinc-500" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Help button */}
      <button
        aria-label="Help"
        className="fixed bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#1c1c24] text-xl text-zinc-200 shadow-lg hover:bg-[#24242e]"
      >
        ?
      </button>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-zinc-500">{label}</p>
    </div>
  );
}