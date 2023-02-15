import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { commonData } from '../../libs/data/common';
import { isMobile } from 'react-device-detect';
import MobileMenu from './MobileMenu';

const Menu = styled.div(
  ({ theme }) => theme.menu,
  () => ({
    '.menu-link': {
      textDecoration: 'none',
      '&:not(:last-child)': {
        marginRight: '15px',
      },
    },
    '.active': {
      textDecoration: 'underline',
    },
  })
);

export default function HeaderMenu(): React.ReactElement {
  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <Menu>
          {commonData.menuLinks.map(({ link, page }) => (
            <NavLink
              to={link}
              className={({ isActive }) =>
                `menu-link ${isActive ? 'active' : ''}`
              }
            >
              {page}
            </NavLink>
          ))}
        </Menu>
      )}
    </>
  );
}
