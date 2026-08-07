import { CardsWithHover } from '@/components/base/cards-with-hover/cards-with-hover';
import { Container } from '@/components/base/container/container';
import { projects } from './project.const';
import { ReactElement } from 'react';

export function Projects(): ReactElement {
  return (
    <Container className="flex flex-col gap-4 md:gap-8">
      <h1 className="text-center text-2xl font-bold text-primary-default dark:text-white md:text-3xl">
        Some projects I've worked on
      </h1>
      <CardsWithHover items={projects} />
    </Container>
  );
}
