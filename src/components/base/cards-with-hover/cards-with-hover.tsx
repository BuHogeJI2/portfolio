import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { ReactElement, useState } from 'react';
import {
  cardsContainerStyles,
  cardItemStyles,
  hoverBackgroundStyles,
  cardStyles,
  cardContentStyles,
  cardImageStyles,
  cardTitleStyles,
  cardDescriptionContainerStyles,
  cardDescriptionStyles,
  cardTechnologiesStyles,
  technologyTagStyles,
  cardLinkContainerStyles,
  cardLinkStyles,
  cardLinkIconStyles,
  readMoreButtonStyles,
  cardImageContainerStyles,
} from './cards-with-hover.styles';
import { Image } from '@/components/base/image/image';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (link: string) => {
    setExpandedItems(prev =>
      prev.includes(link) ? prev.filter(l => l !== link) : [...prev, link],
    );
  };

  return (
    <div className={clsx(cardsContainerStyles, className)}>
      {items.map((item, idx) => {
        const isExpanded = expandedItems.includes(item.link);
        return (
          <div
            key={item?.link}
            className={cardItemStyles}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(idx)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={hoverBackgroundStyles}
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
              <div className="mt-4 flex items-center justify-between px-4">
                <CardTitle>{item.title}</CardTitle>
                <ReadMoreButton
                  isExpanded={isExpanded}
                  onClick={() => toggleItem(item.link)}
                />
              </div>
              <div className={!isExpanded ? 'hidden md:block' : ''}>
                <CardDescription>{item.description}</CardDescription>
              </div>
              {item.technologies && (
                <CardTechnologies technologies={item.technologies} />
              )}
              <CardLink link={item.link} />
            </Card>
          </div>
        );
      })}
    </div>
  );
}

function ReadMoreButton({
  isExpanded,
  onClick,
}: {
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={readMoreButtonStyles}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {isExpanded ? 'Hide description' : 'Show description'}
    </button>
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
      <div className={clsx(cardStyles, className)}>
        <div className={cardContentStyles}>{children}</div>
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
    <div className={cardImageContainerStyles}>
      <Image
        imageSrc={image}
        alt={title}
        className={clsx(cardImageStyles, className)}
        skeletonClassName="h-100 w-full rounded-t-lg"
        lazyLoading={true}
      />
    </div>
  );
}

export function CardTitle({ className, children }: ICardProps): ReactElement {
  return (
    <div className={className}>
      <h4 className={clsx(cardTitleStyles)}>{children}</h4>
    </div>
  );
}

export function CardDescription({
  className,
  children,
}: ICardProps): ReactElement {
  return (
    <div className={cardDescriptionContainerStyles}>
      <p className={clsx(cardDescriptionStyles, className)}>{children}</p>
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
    <div className={clsx(cardTechnologiesStyles, className)}>
      {technologies.map((tech, index) => (
        <span key={index} className={technologyTagStyles}>
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
    <div className={clsx(cardLinkContainerStyles, className)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardLinkStyles}
      >
        <span>View Project</span>
        <svg
          className={cardLinkIconStyles}
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
