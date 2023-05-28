import React from 'react';
import Hero from './Hero';
import HeaderMenu from './HeaderMenu';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header(({ theme }) => theme.header);
export default function Header(): React.ReactElement {
  const [t] = useTranslation();
  const navigate = useNavigate();

  function handleOnHeroClick() {
    navigate('/');
  }

  return (
    <HeaderWrapper>
      <Hero
        title={t('name')}
        subTitle={t('job.title')}
        image={'/portfolio/images/me.jpg'}
        onClick={handleOnHeroClick}
      />
      <HeaderMenu />
    </HeaderWrapper>
  );
}
