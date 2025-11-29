import { Container } from '@/components/base/container/container';
import { ReactElement } from 'react';
import { SocialLinks } from '@/components/pages/home/social-links/social-links';
import { Avatar } from '@/components/pages/home/photos/avatar';
import { SocialBlocks } from '@/components/pages/home/social-links/social-block';
import { Highlighter } from '@/components/base/highlighter/highlighter';
import { WordRotate } from '@/components/base/word-rotate/word-rotate';

export function HomePage(): ReactElement {
  return (
    <Container>
      <div className="flex flex-row items-start gap-4 md:items-start md:items-center md:gap-16 md:py-16">
        <div className="flex-[0.75]">
          <h1 className="text-3xl font-bold text-gray-700 dark:text-white md:text-7xl">
            <span>Hi, I'm</span>{' '}
            <span className="text-primary-default dark:text-primary-dark">
              Dmitry
            </span>
          </h1>
          <h2 className="mt-2 text-2xl font-bold md:mt-4 md:text-5xl">
            <span className="text-primary-default dark:text-secondary-dark">
              Front-end
            </span>{' '}
            <span className="text-gray-700 dark:text-white">developer</span>
          </h2>
          <p className="mt-10 text-base text-info-default dark:text-info-dark md:mt-12 md:text-xl">
            <span>I build</span>
            <WordRotate
              className="mx-2 font-bold text-secondary-default dark:text-secondary-dark"
              words={['modern', 'responsive', 'intuitive', 'efficient']}
            />
            <span>
              web applications and websites that help businesses reach their
              goals.
            </span>
          </p>
          <SocialLinks />
        </div>
        <div className="flex flex-[0.25] items-center justify-center">
          <Avatar />
        </div>
      </div>
      <SocialBlocks />
    </Container>
  );
}
