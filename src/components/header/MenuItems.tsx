import React from 'react';
import { commonData } from '../../libs/data/common';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div(({ theme }) => theme.menu);

interface IMenuItemsProps {
  className?: string;
}

export default function MenuItems({
  className,
}: IMenuItemsProps): React.ReactElement {
  return (
    <Menu className={className}>
      {commonData.menuLinks.map(({ link, page }) => (
        <NavLink
          to={link}
          className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
        >
          {page}
        </NavLink>
      ))}
    </Menu>
  );
}
