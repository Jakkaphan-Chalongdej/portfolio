import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects, profile } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="section-heading">
              <span className="font-mono text-xl text-brand-400">03.</span> Projects
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A selection of things I've built. More are on my GitHub.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.4)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <FiGithub className="text-2xl text-brand-400" />
                  <FiArrowUpRight className="text-xl text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-brand-400">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-ink-800 px-2 py-1 font-mono text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand/50 hover:text-brand-400"
            >
              <FiGithub /> See more on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
