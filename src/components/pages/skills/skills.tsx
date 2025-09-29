import { ReactElement } from 'react';
import { skills } from './skills.const';
import { useSkillsTooltip } from './useSkillsTooltip';
import {
  containerStyles,
  domainTitleStyles,
  domainDescriptionStyles,
  skillsContainerStyles,
  skillItemStyles,
  skillIconStyles,
  skillImageStyles,
  skillNameStyles,
  tooltipStyles,
  tooltipTitleStyles,
  tooltipDescriptionStyles,
  tooltipArrowStyles,
} from './skills.styles';

export function Skills(): ReactElement {
  const { selectedSkill, handleSkillClick, handleSkillMouseLeave } =
    useSkillsTooltip();

  return (
    <div className={containerStyles}>
      {skills.map(skill => (
        <div key={skill.domain}>
          <div className={domainTitleStyles}>{skill.domain}</div>
          <div className={domainDescriptionStyles}>{skill.description}</div>
          <div className={skillsContainerStyles}>
            {skill.skills.map(skill => (
              <div
                key={skill.name}
                className={skillItemStyles}
                onClick={e => handleSkillClick(skill, e)}
                onMouseLeave={handleSkillMouseLeave}
              >
                <div className={skillIconStyles}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={skillImageStyles}
                  />
                </div>
                <div className={skillNameStyles}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedSkill && (
        <div
          className={tooltipStyles}
          style={{
            left: selectedSkill.x,
            top: selectedSkill.y,
            transform: 'translateX(-50%) translateY(-100%)',
          }}
        >
          <div className={tooltipTitleStyles}>{selectedSkill.name}</div>
          <div className={tooltipDescriptionStyles}>
            {selectedSkill.description}
          </div>
          <div className={tooltipArrowStyles}></div>
        </div>
      )}
    </div>
  );
}
