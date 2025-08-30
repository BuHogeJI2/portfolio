import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { ReactElement, useState } from 'react';

interface ICardsWithHoverProps {
  items: Array<ICardWithHoverItem>;
  className?: string;
}

export interface ICardWithHoverItem {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
}

export function CardsWithHover({
  items,
  className,
}: ICardsWithHoverProps): ReactElement {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 pb-10 md:grid-cols-2 lg:grid-cols-2',
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-[#3F3F46]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card link={item.link}>
            <CardImage image={item.image} title={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.technologies && (
              <CardTechnologies technologies={item.technologies} />
            )}
            <CardLink link={item.link} />
          </Card>
        </div>
      ))}
    </div>
  );
}

interface ICardProps {
  className?: string;
  children: React.ReactNode;
  link?: string;
}

export function Card({ className, children, link }: ICardProps): ReactElement {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          'relative z-20 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-transparent bg-[#27272A] group-hover:border-slate-700 dark:border-white/[0.2]',
          className,
        )}
      >
        <div className="relative z-50">{children}</div>
      </div>
    </a>
  );
}

interface ICardImageProps {
  className?: string;
  image: string;
  title: string;
}

export function CardImage({
  className,
  image,
  title,
}: ICardImageProps): ReactElement {
  return (
    <img
      src={image}
      alt={title}
      className={cn('h-100 w-full rounded-t-lg object-cover', className)}
    />
  );
}

export function CardTitle({ className, children }: ICardProps): ReactElement {
  return (
    <div className="px-4 py-2">
      <h4
        className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}
      >
        {children}
      </h4>
    </div>
  );
}

export function CardDescription({
  className,
  children,
}: ICardProps): ReactElement {
  return (
    <div className="px-4 py-2">
      <p
        className={cn(
          'text-sm leading-relaxed tracking-wide text-zinc-400',
          className,
        )}
      >
        {children}
      </p>
    </div>
  );
}

interface ICardTechnologiesProps {
  className?: string;
  technologies: string[];
}

export function CardTechnologies({
  className,
  technologies,
}: ICardTechnologiesProps): ReactElement {
  return (
    <div className={cn('flex flex-wrap gap-2 p-4', className)}>
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

interface ICardLinkProps {
  className?: string;
  link: string;
}

export function CardLink({ className, link }: ICardLinkProps): ReactElement {
  return (
    <div className={cn('mt-auto flex items-center p-4', className)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300 group-hover:text-blue-200"
      >
        <span>View Project</span>
        <svg
          className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
