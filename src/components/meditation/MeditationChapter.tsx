import type { ReactNode } from "react";

type MeditationChapterProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Shared chapter shell: consistent anchor, rhythm and generous vertical air. */
export function MeditationChapter({ id, children, className = "" }: MeditationChapterProps) {
  return (
    <section id={id} className={`scroll-mt-32 py-28 md:py-40 lg:py-52 ${className}`}>
      {children}
    </section>
  );
}
