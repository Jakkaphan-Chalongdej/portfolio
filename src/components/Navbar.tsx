import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of whichever section is in view.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="group font-mono text-sm font-medium text-white">
          <span className="text-brand-400">{"<"}</span>
          jakkaphan
          <span className="text-brand-400">{" />"}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm transition-colors hover:text-white ${
                  active === l.href ? "text-brand-400" : "text-zinc-400"
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-400" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full border border-brand/40 px-4 py-1.5 text-sm font-medium text-brand-400 transition-colors hover:bg-brand/10"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-md md:hidden">
          <ul className="container-page flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-zinc-300 transition-colors hover:text-brand-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
