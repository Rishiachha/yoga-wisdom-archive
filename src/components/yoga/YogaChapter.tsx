import type { ReactNode } from "react";

type YogaChapterProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Shared chapter shell: consistent id anchor, rhythm and generous vertical air. */
export function YogaChapter({ id, children, className = "" }: YogaChapterProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 py-28 md:py-40 lg:py-52 ${className}`}
    >
      {children}
    </section>
  );
}
