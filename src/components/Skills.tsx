import { skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="section-heading">
              <span className="font-mono text-xl text-brand-400">02.</span> Skills &
              tech
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 rounded-lg border border-white/10 bg-ink-850 px-3 py-2 text-sm text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-white"
                      >
                        <Icon
                          className="text-lg transition-transform group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
