import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-full w-full overflow-hidden bg-[#f4efe7] text-slate-900 transition-colors duration-300 dark:bg-[#0b1220] dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_40%),radial-gradient(circle_at_top_right,rgba(62,115,109,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.8)_1px,transparent_1px)] [background-size:36px_36px] dark:opacity-[0.08]" />
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-[24rem] w-[24rem] rounded-full bg-white/70 blur-3xl dark:bg-cyan-400/10" />
      <div className="bg-primary-default/12 pointer-events-none absolute right-[-8rem] top-[20rem] h-[24rem] w-[24rem] rounded-full blur-3xl dark:bg-primary-dark/10" />
      <div className="bg-slate-900/6 pointer-events-none absolute bottom-[-8rem] left-1/3 h-[18rem] w-[18rem] rounded-full blur-3xl dark:bg-slate-100/5" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
