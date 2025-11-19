import { Container } from '@/components/base/container/container';
import { ReactElement } from 'react';
import { SocialLinks } from '@/components/pages/home/social-links/social-links';
import { Avatar } from '@/components/pages/home/photos/avatar';
import { SocialBlocks } from '@/components/pages/home/social-links/social-block';

export function HomePage(): ReactElement {
  return (
    <Container>
      <div className="flex flex-row items-start gap-4 md:items-start md:items-center md:gap-16 md:py-16">
        <div className="flex-[0.75] space-y-2 md:space-y-4">
          <h1 className="text-3xl font-bold dark:text-white md:text-7xl">
            <span>Hi, I'm</span>{' '}
            <span className="text-primary-default dark:text-primary-dark">
              Dmitry
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-primary-default dark:text-secondary-dark md:text-3xl">
            Frontend Developer
          </h2>
          <p className="text-base text-info-default dark:text-info-dark md:text-xl">
            I build modern, responsive web applications and websites that help
            businesses reach their goals.
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
