import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Hero from './Hero';
import { personalData } from '../../libs/data/personal';
import { useTranslation } from 'react-i18next';

export default function HeaderContent(): React.ReactElement {
  const navigate = useNavigate();
  const [t] = useTranslation();

  function handleOnHeroClick() {
    navigate('/');
  }

  return (
    <>
      <Hero
        title={t('name')}
        subTitle={t('job.title')}
        image={personalData.photo}
        onClick={handleOnHeroClick}
      />
      <div className={'menu'}>
        <NavLink to={'/'} className={'menu-link'}>
          Home
        </NavLink>
        <NavLink to={'/info'} className={'menu-link'}>
          Info
        </NavLink>
      </div>
    </>
  );
}
