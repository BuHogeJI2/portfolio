import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud';
import React from 'react';
import { Layout, Slider } from '../modules';
import styled from 'styled-components';
import { commonData } from '../libs/data/CommonData';
import { useTranslation } from 'react-i18next';
import { fontSize } from '../libs/theme/theme';
import { isMobile } from 'react-device-detect';

const SkillsContent = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  justifyContent: isMobile ? 'space-between' : 'space-around',
  alignItems: 'center',
  '.tagcloud--item': {
    zIndex: '0 !important',
  },
});

const BaseSliderWrapper = styled.div(
  ({ theme }) => theme.slider.wrapper,
  () => ({
    marginTop: isMobile ? '40px' : 'unset',
    maxWidth: isMobile ? '90%' : '50%',
    '.slide-text': {
      fontSize: fontSize.big,
    },
  })
);

export default function SkillsPage(): React.ReactElement {
  const [t] = useTranslation();

  const tagsSize = isMobile ? 300 : 400;

  return (
    <Layout>
      <SkillsContent>
        <BaseSliderWrapper>
          <Slider>
            <div className={'slide-text'}>{t('skills1')}</div>
            <div className={'slide-text'}>{t('skills2')}</div>
            <div className={'slide-text'}>{t('skills3')}</div>
            <div className={'slide-text'}>{t('skills4')}</div>
          </Slider>
        </BaseSliderWrapper>
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(tagsSize, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: 'normal',
          })}
        >
          {commonData.skills}
        </TagCloud>
      </SkillsContent>
    </Layout>
  );
}
