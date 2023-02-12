import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from './Hero';
import { personalData } from '../../data/personal';

export default function HeaderContent(): React.ReactElement {
  return (
    <>
      <Hero
        title={personalData.name}
        subTitle={personalData.jobTitle}
        image={personalData.photo}
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
