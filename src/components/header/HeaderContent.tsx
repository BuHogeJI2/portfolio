import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderContent(): React.ReactElement {
  return (
    <>
      <div>Hero</div>
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
