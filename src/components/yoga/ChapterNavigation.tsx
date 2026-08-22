import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { chapters } from "./chapters";

export function ChapterNavigation() {
  const [active, setActive] = useState<string>("introduction");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-md"
    >
      <div className="mx-auto max-w-[92rem] px-6 pt-6 pb-1 lg:px-12">
        <p className="label-eyebrow text-muted-foreground">Explore The Knowledge</p>
      </div>
      <div className="no-scrollbar overflow-x-auto">
        <ul className="mx-auto flex w-max min-w-full max-w-[92rem] items-stretch gap-7 px-6 lg:gap-9 lg:px-12">
          {chapters.map((chapter) => {
            const isActive = active === chapter.id;
            return (
              <li key={chapter.id} className="relative shrink-0">
                <a
                  href={`#${chapter.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block py-4 font-display text-lg tracking-wide whitespace-nowrap transition-colors duration-500 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {chapter.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="chapter-underline"
                    className="absolute inset-x-0 bottom-0 h-px bg-gold"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
