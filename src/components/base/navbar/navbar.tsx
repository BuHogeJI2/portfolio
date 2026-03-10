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
  navListItemStyles,
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

export const navLinks: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  // { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

function Brand() {
  return (
    <NavLink to="/" className="flex min-w-0 flex-col">
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-default dark:text-primary-dark">
        Frontend Engineer
      </span>
      <span className="truncate text-sm font-semibold tracking-[0.01em] text-slate-900 dark:text-white md:text-base">
        Dzmitry Dziamidovich
      </span>
    </NavLink>
  );
}

export function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={headerStyles}>
      <Container className={navContainerStyles}>
        <div className={navStyles}>
          <nav>
            <div className={desktopNavStyles}>
              <div className={desktopNavContentStyles}>
                <Brand />
                <ul className={navListStyles}>
                  {navLinks.map(({ label, to }) => (
                    <li key={label} className={navListItemStyles}>
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
                <div className="flex items-center justify-end">
                  <NavbarActionButton
                    type={ENavbarActionButtonType.THEME_TOGGLE}
                  />
                </div>
              </div>
            </div>

            <div className={mobileNavActionButtonContainerStyles}>
              <Brand />
              <div className="flex items-center gap-2">
                <NavbarActionButton
                  type={ENavbarActionButtonType.THEME_TOGGLE}
                />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={mobileMenuButtonStyles}
                >
                  <span>Menu</span>
                  {isOpen ? (
                    <FaTimes className={mobileMenuIconStyles} />
                  ) : (
                    <FaBars className={mobileMenuIconStyles} />
                  )}
                </button>
              </div>
            </div>
          </nav>

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
