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
} from './navbar.styles';

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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={mobileMenuButtonStyles}
            >
              <svg
                className={mobileMenuIconStyles}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
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
