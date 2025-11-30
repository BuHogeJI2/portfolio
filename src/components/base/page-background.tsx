import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="min-h-full w-full bg-white transition-colors duration-300 dark:bg-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800/30" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
