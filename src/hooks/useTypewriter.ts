import { useEffect, useState } from "react";

type Options = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

/**
 * Cycles through `words`, typing and deleting each one like a terminal.
 * Returns the text currently visible.
 */
export function useTypewriter(
  words: string[],
  { typeSpeed = 85, deleteSpeed = 40, pause = 1500 }: Options = {}
) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";

    // Finished typing the whole word → hold, then start deleting.
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // Finished deleting → move to the next word.
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return words[index % words.length]?.slice(0, sub) ?? "";
}
