import { ReactElement } from 'react';
import { skills } from './skills.const';
import { useSkillsTooltip } from './useSkillsTooltip';

export function Skills(): ReactElement {
  const { selectedSkill, handleSkillClick, handleSkillMouseLeave } =
    useSkillsTooltip();

  return (
    <div className="relative flex flex-col gap-12">
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
                className="group flex w-fit cursor-pointer flex-row items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-500/30 hover:shadow-lg dark:bg-blue-500/20"
                onClick={e => handleSkillClick(skill, e)}
                onMouseLeave={handleSkillMouseLeave}
              >
                <div className="h-8 w-8 transition-transform duration-300 ease-in-out group-hover:rotate-12">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-base font-bold text-primary-default dark:text-white">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedSkill && (
        <div
          className="pointer-events-none fixed z-50 max-w-xs rounded-lg bg-gray-800 px-3 py-2 text-sm text-white shadow-lg"
          style={{
            left: selectedSkill.x,
            top: selectedSkill.y,
            transform: 'translateX(-50%) translateY(-100%)',
          }}
        >
          <div className="mb-1 font-semibold">{selectedSkill.name}</div>
          <div className="text-gray-300">{selectedSkill.description}</div>
          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
}
