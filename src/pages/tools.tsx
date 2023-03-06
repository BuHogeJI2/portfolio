import React from 'react';
import Layout from '../components/base/Layout';
import styled from 'styled-components';
import ListItems from '../components/main/ListItems';
import { fontSize } from '../libs/theme/theme';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

const ToolsWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  alignSelf: 'flex-start',
  flexBasis: '100%',
  padding: '0 45px',
  '.title': {
    fontSize: fontSize.big,
    textAlign: 'center',
    marginTop: isMobile ? '100px' : '0px',
    marginBottom: isMobile ? '10px' : '0px',
  },
  '.sections': {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  '.section': {
    fontSize: fontSize.big,
  },
  '.block': {
    margin: isMobile ? '0px' : '0 50px',
  },
  li: {
    fontSize: fontSize.big,
    fontWeight: 'bold',
    listStyle: 'none',
    lineHeight: 1.5,
    '&:before': {
      content: "'⦿'",
      width: '10px',
      height: '10px',
      paddingRight: '10px',
    },
  },
});

const StyledListItem = styled(ListItems)({
  padding: '0 10px',
});

export default function ToolsPage(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <Layout>
      <ToolsWrapper>
        <h1 className={'title'}>{t('tools.title')}</h1>
        <div className={'sections'}>
          <div className={'block'}>
            <p className={'section'}>{t('tools.main')}</p>
            <StyledListItem
              items={[
                'TypeScript',
                'React.js',
                'Webpack',
                'react-router-dom',
                'styled-components',
              ]}
            />
          </div>
          <div className={'block'}>
            <p className={'section'}>{t('tools.utils')}</p>
            <StyledListItem items={['i18n', 'lodash', 'js-cookie']} />
          </div>
          <div className={'block'}>
            <p className={'section'}>{t('tools.code')}</p>
            <StyledListItem items={['Eslint', 'Prettier']} />
          </div>
          <div className={'block'}>
            <p className={'section'}>{t('tools.manager')}</p>
            <StyledListItem items={['npm']} />
          </div>
        </div>
      </ToolsWrapper>
    </Layout>
  );
}
