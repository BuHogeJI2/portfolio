import { Container } from '@/components/container/container';
import { ReactElement } from 'react';
import { SocialLinks } from '@/components/social-links/social-links';
import { Avatar } from '@/components/photos/avatar';
import { SocialBlocks } from '@/components/social-links/social-block';

export function HomePage(): ReactElement {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 py-16 md:flex-row md:items-start">
        <div className="flex-[0.75] space-y-4">
          <h1 className="text-5xl font-bold dark:text-white md:text-7xl">
            <span>Hi, I'm</span>{' '}
            <span className="text-primary-default dark:text-primary-dark">
              Dmitry
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-secondary-default dark:text-secondary-dark md:text-5xl">
            Frontend Developer
          </h2>
          <p className="text-xl text-info-default dark:text-info-dark">
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
