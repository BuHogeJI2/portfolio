import React from 'react';
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud';
import { pageData } from '../../../pages/mockedData';
import {
  SkillsContent,
  SkillsTextWrapper,
  TagCloudWrapper,
} from './Skills.styled';
import { useTranslation } from 'react-i18next';
import { tagsSize } from '../../../constants';

export default function Skills(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <SkillsContent>
      <SkillsTextWrapper>
        <div className={'slide-text'}>{t('skills1')}</div>
        <div className={'slide-text'}>{t('skills2')}</div>
        <div className={'slide-text'}>{t('skills3')}</div>
        <div className={'slide-text'}>{t('skills4')}</div>
      </SkillsTextWrapper>
      <TagCloudWrapper>
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(tagsSize, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: 'normal',
          })}
        >
          {pageData.skills}
        </TagCloud>
      </TagCloudWrapper>
    </SkillsContent>
  );
}
