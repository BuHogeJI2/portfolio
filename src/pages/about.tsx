import { Container } from '@/components/base/container/container';
import { AboutMe } from '@/components/pages/about/about-me';
import { ReactElement } from 'react';

export function AboutPage(): ReactElement {
  return (
    <Container>
      <AboutMe />
    </Container>
  );
}
