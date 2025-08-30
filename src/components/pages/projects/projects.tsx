import { CardsWithHover } from '@/components/base/cards-with-hover/cards-with-hover';
import { projects } from './project.const';
import { ReactElement } from 'react';

export function Projects(): ReactElement {
  return <CardsWithHover items={projects} />;
}
