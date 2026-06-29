import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="section-heading">
              <span className="font-mono text-xl text-brand-400">02.</span>{" "}
              Experience
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        <div className="mt-12 space-y-14">
          {experience.map((job, ji) => (
            <Reveal key={job.company} delay={ji * 0.05}>
              <div>
                {/* company header */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <FiBriefcase className="text-brand-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {job.company}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    {job.role} · {job.period}
                  </span>
                </div>

                {/* timeline of projects */}
                <ol className="relative mt-6 border-l border-white/10 pl-8">
                  {job.items.map((item) => (
                    <li key={item.project} className="group relative pb-8 last:pb-0">
                      {/* dot */}
                      <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-500 ring-4 ring-brand/10 transition-transform group-hover:scale-125" />
                      </span>

                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-mono text-xs text-brand-400">
                          {item.date}
                        </span>
                        <h4 className="font-semibold text-white">
                          {item.project}
                        </h4>
                      </div>
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
