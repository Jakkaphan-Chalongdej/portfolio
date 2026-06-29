import { skillGroups } from "../data";

// Flatten every skill into one list for the scrolling strip.
const items = skillGroups.flatMap((g) => g.items);

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {items.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.name}
            className="flex items-center gap-2 text-zinc-400"
            title={s.name}
          >
            <Icon className="text-2xl" style={{ color: s.color }} />
            <span className="whitespace-nowrap text-sm font-medium">
              {s.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** An infinite, auto-scrolling strip of technology icons. */
export default function Marquee() {
  return (
    <div className="group relative flex overflow-hidden border-y border-white/10 bg-ink-900/40 py-5">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  );
}
