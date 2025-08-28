import { useState } from 'react';
import { TSkill } from './skills.const';

interface ISelectedSkill {
  name: string;
  description: string;
  x: number;
  y: number;
}

interface IUseSkillsTooltip {
  selectedSkill: ISelectedSkill | null;
  handleSkillClick: (skill: TSkill, event: React.MouseEvent) => void;
  handleSkillMouseLeave: () => void;
}

export function useSkillsTooltip(): IUseSkillsTooltip {
  const [selectedSkill, setSelectedSkill] = useState<ISelectedSkill | null>(
    null,
  );

  function handleSkillClick(skill: TSkill, event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();

    setSelectedSkill({
      name: skill.name,
      description: skill.description,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  }

  function handleSkillMouseLeave() {
    setSelectedSkill(null);
  }

  return {
    selectedSkill,
    handleSkillClick,
    handleSkillMouseLeave,
  };
}
