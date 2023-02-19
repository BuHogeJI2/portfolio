import React from 'react';
import Layout from '../components/base/Layout';
import BaseSlider from '../components/base/BaseSlider';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { fontSize } from '../libs/theme/theme';

const BaseSliderWrapper = styled.div(
  ({ theme }) => theme.slider.wrapper,
  () => ({
    maxWidth: '75%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  })
);

export default function HomePage(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <Layout>
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
