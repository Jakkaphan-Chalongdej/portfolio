import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-mono text-sm text-brand-400">05. What's next?</p>
            <h2 className="section-heading">Let's work together</h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              I'm always open to discussing back-end work, API projects, or
              interesting opportunities. Whether you have a question or just want
              to say hi, my inbox is open.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-brand-400"
            >
              <FiMail /> Say hello
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-400"
              >
                <FiMail className="text-brand-400" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-400"
              >
                <FiPhone className="text-brand-400" /> {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="text-brand-400" /> {profile.location}
              </span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-2xl text-zinc-500">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
