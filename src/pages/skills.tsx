import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud';
import React from 'react';
import Layout from '../components/base/Layout';
import styled from 'styled-components';
import { commonData } from '../libs/data/CommonData';
import BaseSlider from '../components/base/BaseSlider';
import { Trans, useTranslation } from 'react-i18next';
import { fontSize } from '../libs/theme/theme';

const SkillsContent = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const BaseSliderWrapper = styled.div(
  ({ theme }) => theme.slider.wrapper,
  () => ({
    maxWidth: '50%',
    borderLeft: 'none',
    '.slide-text': {
      fontSize: fontSize.big,
    },
  })
);

export default function SkillsPage(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <Layout>
      <SkillsContent>
        <BaseSliderWrapper>
          <BaseSlider>
            <div className={'slide-text'}>{t('skills1')}</div>
            <div className={'slide-text'}>{t('skills2')}</div>
            <div className={'slide-text'}>{t('skills3')}</div>
            <div className={'slide-text'}>{t('skills4')}</div>
          </BaseSlider>
        </BaseSliderWrapper>
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: 'normal',
          })}
        >
          {commonData.skills}
        </TagCloud>
      </SkillsContent>
    </Layout>
  );
}
