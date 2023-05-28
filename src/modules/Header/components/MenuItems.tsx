import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useMenuItems } from '../hooks';

const Menu = styled.div(({ theme }) => theme.menu);

interface IMenuItemsProps {
  className?: string;
}

export default function MenuItems({
  className,
}: IMenuItemsProps): React.ReactElement {
  const menuItems = useMenuItems();

  return (
    <Menu className={className}>
      {menuItems.map(({ link, page }) => (
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
