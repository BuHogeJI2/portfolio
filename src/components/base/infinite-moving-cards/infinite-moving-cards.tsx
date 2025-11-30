'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode, useEffect, useState } from 'react';

export interface InfiniteMovingCardsProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  children,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </ul>
    </div>
  );
};

export interface IPhoto {
  src: string;
  alt: string;
}

export interface ICardItem {
  quote: string;
  name: string;
  title: string;
}

export interface InfiniteMovingCardsItemsProps {
  items: ICardItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export interface InfiniteMovingImagesProps {
  items: IPhoto[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCardsWithItems = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsItemsProps) => {
  return (
    <InfiniteMovingCards
      direction={direction}
      speed={speed}
      pauseOnHover={pauseOnHover}
      className={cn('max-w-7xl', className)}
    >
      {items.map((item, idx) => (
        <li
          className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] md:w-[450px]"
          key={`${item.name}-${idx}`}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className="relative z-20 text-sm font-normal leading-[1.6] text-neutral-800 dark:text-gray-100">
              {item.quote}
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className="text-sm font-normal leading-[1.6] text-neutral-500 dark:text-gray-400">
                  {item.name}
                </span>
                <span className="text-sm font-normal leading-[1.6] text-neutral-500 dark:text-gray-400">
                  {item.title}
                </span>
              </span>
            </div>
          </blockquote>
        </li>
      ))}
    </InfiniteMovingCards>
  );
};

export const InfiniteMovingImages = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteMovingImagesProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload and wait for all images to load before rendering
  React.useEffect(() => {
    const loadPromises = items.map(
      item =>
        new Promise<void>((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve even on error to not block
          img.src = item.src;
        }),
    );

    Promise.all(loadPromises).then(() => {
      // Small delay to ensure images are in cache
      setTimeout(() => {
        setImagesLoaded(true);
      }, 100);
    });
  }, [items]);

  if (!imagesLoaded) {
    return (
      <div className={cn('flex items-center justify-center py-4', className)}>
        <div className="h-16 w-16 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 md:h-32 md:w-32" />
      </div>
    );
  }

  return (
    <InfiniteMovingCards
      direction={direction}
      speed={speed}
      pauseOnHover={pauseOnHover}
      className={className}
    >
      {items.map((item, idx) => (
        <li
          key={`${item.src}-${idx}`}
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg md:h-32 md:w-32"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </li>
      ))}
    </InfiniteMovingCards>
  );
};
