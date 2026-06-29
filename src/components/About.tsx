import { FiCpu, FiBookOpen } from "react-icons/fi";
import { about, education } from "../data";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="section-heading">
              <span className="font-mono text-xl text-brand-400">01.</span> About me
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-zinc-400">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <FiCpu className="text-brand-400" /> Currently learning
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.learning.map((l) => (
                    <span
                      key={l}
                      className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm text-brand-400"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <FiBookOpen className="text-brand-400" /> Education
                </div>
                <p className="text-sm font-medium text-zinc-200">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{education.school}</p>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {education.period}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-ink-900/60 p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40"
                >
                  <div className="text-3xl font-extrabold brand-text">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
