import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-page flex flex-col items-center gap-2 text-center text-sm text-zinc-500">
        <p className="font-mono">
          Built with React, Vite &amp; Tailwind CSS — deployed on GitHub Pages.
        </p>
        <p>
          © {profile.name} · Designed &amp; built with care.
        </p>
      </div>
    </footer>
  );
}
