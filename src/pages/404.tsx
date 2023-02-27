import React from 'react';
import Layout from '../components/base/Layout';
import styled from 'styled-components';
import { fontSize } from '../libs/theme/theme';
import { useTranslation } from 'react-i18next';

const ErrorMessagesWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  lineHeight: 1.5,
  '.not-found': {
    fontSize: '45px',
  },
  '.thank': {
    fontSize: fontSize.xxl,
  },
});

const ErrorMessage = styled.div({
  fontSize: fontSize.big,
  textAlign: 'center',
  '&:not(:last-child)': {
    marginBottom: '20px',
  },
});

export default function Error404Page(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <Layout>
      <ErrorMessagesWrapper>
        <ErrorMessage>{t('error.404.sorry')}</ErrorMessage>
        <ErrorMessage className={'not-found'}>
          {t('error.404.not.found')}
        </ErrorMessage>
        <ErrorMessage>{t('error.404.check')}</ErrorMessage>
        <ErrorMessage className={'thank'}>{t('error.404.thank')}</ErrorMessage>
      </ErrorMessagesWrapper>
    </Layout>
  );
}
