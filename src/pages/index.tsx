import React from 'react';
import { Layout } from '../modules';
import BaseSlider from '../modules/Slider/BaseSlider';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const AboutMe = styled.h1({
  marginBottom: '30px',
});

const BaseSliderWrapper = styled.div(
  ({ theme }) => theme.slider.wrapper,
  () => ({
    maxWidth: isMobile ? '90%' : '75%',
  })
);

export default function HomePage(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <Layout>
      <AboutMe>{t('about.me')}</AboutMe>
      <BaseSliderWrapper>
        <BaseSlider>
          <Trans>
            <div className={'slide-text'}>{t('greeting')}</div>
          </Trans>
          <div className={'slide-text'}>{t('exp1')}</div>
          <div className={'slide-text'}>{t('exp2')}</div>
          <div className={'slide-text'}>{t('exp3')}</div>
        </BaseSlider>
      </BaseSliderWrapper>
    </Layout>
  );
}
