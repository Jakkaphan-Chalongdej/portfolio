import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { profile, roles } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* animated grid + floating orbs */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-[0.18]" />
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 animate-floaty rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 animate-floaty rounded-full bg-cyan-500/10 blur-3xl [animation-delay:-3s]" />

      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-brand-400"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {profile.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 flex min-h-[1.2em] flex-wrap items-baseline gap-x-3 text-3xl font-bold tracking-tight text-zinc-500 sm:text-5xl lg:text-6xl"
        >
          <span>I'm a</span>
          <span className="brand-text">
            {typed}
            <span className="ml-0.5 inline-block w-[3px] animate-pulse self-center bg-brand-400 align-middle [height:0.9em]" />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-brand-400"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand/50 hover:text-brand-400"
          >
            <FiMail /> Contact me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center gap-5 text-2xl text-zinc-500"
        >
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-brand-400"
          >
            <FaGithub />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-brand-400"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="transition-colors hover:text-brand-400"
          >
            <FaFacebook />
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xl text-zinc-600 transition-colors hover:text-brand-400"
      >
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
