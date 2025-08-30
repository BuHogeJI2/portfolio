import { CardsWithHover } from '@/components/base/cards-with-hover/cards-with-hover';
import { projects } from './project.const';
import { ReactElement } from 'react';

function PorjectContainer({ children }: { children: ReactElement }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export function Projects(): ReactElement {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-2xl font-bold text-primary-default dark:text-white">
        My projects and previous work places
      </h1>
      <PorjectContainer>
        <CardsWithHover items={projects} />
      </PorjectContainer>
    </div>
  );
}
