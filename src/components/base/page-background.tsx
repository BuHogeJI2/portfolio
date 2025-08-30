import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="min-h-full w-full bg-white dark:bg-zinc-900">
      {children}
    </div>
  );
}
