import { Container } from '@/components/container/container';
import { ReactElement } from 'react';
import { SocialLinks } from '@/components/social-links/social-links';
import { Photos } from '@/components/photos/photos';
export function HomePage(): ReactElement {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 py-16 md:flex-row md:items-start">
        <div className="flex-[0.75] space-y-4">
          <h1 className="text-5xl font-bold md:text-7xl dark:text-white">
            Hi, I'm{' '}
            <span className="text-primary-default dark:text-primary-dark">
              Dmitry
            </span>
          </h1>
          <h2 className="text-secondary-default dark:text-secondary-dark text-3xl font-bold md:text-5xl">
            Frontend Developer
          </h2>
          <p className="text-info-default dark:text-info-dark text-xl">
            I build modern, responsive web applications and websites that help
            businesses reach their goals.
          </p>
          <SocialLinks />
        </div>
        <div className="flex flex-[0.25] justify-end">
          <Photos />
        </div>
      </div>
    </Container>
  );
}
