import { ReactElement } from 'react';
import { skills } from './skills.const';

export function Skills(): ReactElement {
  return (
    <div className="flex flex-col gap-4">
      {skills.map(skill => (
        <div key={skill.domain}>
          <div className="text-2xl font-bold text-primary-default dark:text-white">
            {skill.domain}
          </div>
          <div className="mt-2 text-sm text-secondary-default dark:text-white">
            {skill.description}
          </div>
          <div className="mt-4 flex flex-row flex-wrap gap-4">
            {skill.skills.map(skill => (
              <div
                key={skill.name}
                className="flex w-fit flex-row items-center gap-2 rounded-xl bg-secondary-default px-4 py-2 dark:bg-secondary-default"
              >
                <div className="h-10 w-10">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-primary-default dark:text-white">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
