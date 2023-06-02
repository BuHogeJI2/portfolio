import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ContentWrapper, Photo, TextWrapper, Title } from './AboutMe.styled';
import { isMobile } from 'react-device-detect';

export default function AboutMe(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <>
      {!isMobile ? <Title>{t('about.me')}</Title> : null}
      <ContentWrapper>
        <Photo src={'/portfolio/images/me_pr.jpg'} />
        <TextWrapper>
          <Trans>
            <div className={'text-block'}>{t('greeting')}</div>
          </Trans>
          <div className={'text-block'}>{t('exp1')}</div>
          <div className={'text-block'}>{t('exp2')}</div>
          <div className={'text-block'}>{t('exp3')}</div>
        </TextWrapper>
      </ContentWrapper>
    </>
  );
}
