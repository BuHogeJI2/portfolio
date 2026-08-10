import { PropsWithChildren, ReactElement } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

export type TRevealVariant = 'hero' | 'featured';

interface IRevealProps extends PropsWithChildren {
  variant?: TRevealVariant;
  delay?: number;
  className?: string;
}

const revealConfig: Record<
  TRevealVariant,
  {
    initial: { opacity: number; y: number; scale?: number };
    transition: {
      duration: number;
      ease: readonly [number, number, number, number];
    };
    viewportAmount: number;
  }
> = {
  hero: {
    initial: { opacity: 0, y: 28 },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
    viewportAmount: 0.25,
  },
  featured: {
    initial: { opacity: 0, y: 18, scale: 0.99 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
    viewportAmount: 0.2,
  },
};

export function Reveal({
  children,
  variant = 'hero',
  delay = 0,
  className,
}: IRevealProps): ReactElement {
  const shouldReduceMotion = useReducedMotion() ?? false;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const config = revealConfig[variant];

  return (
    <motion.div
      className={cn(className)}
      initial={config.initial}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: config.viewportAmount }}
      transition={{ ...config.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
