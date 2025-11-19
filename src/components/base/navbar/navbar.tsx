import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@/components/base/container/container';
import { NavbarActionButton } from './navbar-action-button';
import { NavItem, ENavbarActionButtonType } from './navbar.types';
import {
  headerStyles,
  navContainerStyles,
  navStyles,
  desktopNavStyles,
  desktopNavContentStyles,
  navListStyles,
  navLinkStyles,
  navLinkActiveStyles,
  navLinkInactiveStyles,
  mobileMenuButtonStyles,
  mobileMenuIconStyles,
  mobileMenuStyles,
  mobileMenuListStyles,
  mobileMenuItemStyles,
  mobileNavLinkStyles,
  mobileNavLinkActiveStyles,
  mobileNavLinkInactiveStyles,
  mobileNavActionButtonContainerStyles,
} from './navbar.styles';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  // { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={headerStyles}>
      <Container>
        <div className={navContainerStyles}>
          <nav className={navStyles}>
            {/* Desktop Navigation */}
            <div className={desktopNavStyles}>
              <div className={desktopNavContentStyles}>
                <NavbarActionButton
                  type={ENavbarActionButtonType.THEME_TOGGLE}
                />
                <ul className={navListStyles}>
                  {navLinks.map(({ label, to }) => (
                    <li key={label}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `${navLinkStyles} ${
                            isActive
                              ? navLinkActiveStyles
                              : navLinkInactiveStyles
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                {/* <NavbarActionButton
                  type={ENavbarActionButtonType.LANGUAGE_TOGGLE}
                /> */}
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className={mobileNavActionButtonContainerStyles}>
              <NavbarActionButton type={ENavbarActionButtonType.THEME_TOGGLE} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={mobileMenuButtonStyles}
              >
                <span className="text-info-default dark:text-info-dark">
                  Menu
                </span>
                {isOpen ? (
                  <FaTimes className={mobileMenuIconStyles} />
                ) : (
                  <FaBars className={mobileMenuIconStyles} />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={mobileMenuStyles}>
              <ul className={mobileMenuListStyles}>
                {navLinks.map(({ label, to }) => (
                  <li key={label} className={mobileMenuItemStyles}>
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `${mobileNavLinkStyles} ${
                          isActive
                            ? mobileNavLinkActiveStyles
                            : mobileNavLinkInactiveStyles
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
