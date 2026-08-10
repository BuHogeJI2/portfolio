import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-full w-full overflow-hidden bg-canvas text-content transition-colors duration-300">
      <div className="page-background-art pointer-events-none absolute inset-0" />
      <div className="page-background-grid pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]" />
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-surface/70 blur-3xl dark:bg-accent/10" />
      <div className="pointer-events-none absolute right-[-8rem] top-80 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
