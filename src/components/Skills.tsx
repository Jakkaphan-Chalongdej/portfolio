import { skillCategories } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="section-heading">
              <span className="font-mono text-xl text-brand-400">03.</span> Skills &
              tech
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-colors hover:border-brand/30">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((name) => (
                    <span
                      key={name}
                      className="rounded-lg border border-white/10 bg-ink-850 px-3 py-1.5 text-sm text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-white"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
