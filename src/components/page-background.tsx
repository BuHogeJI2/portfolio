import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800">
      {children}
    </div>
  );
}
