import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@/components/base/container/container';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/lib/utils';
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
  { label: 'Contact', to: '/contact' },
];

function Brand() {
  return (
    <NavLink
      to="/"
      className="flex min-w-0 flex-col rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
        Frontend Engineer
      </span>
      <span className="truncate text-sm font-semibold tracking-[0.01em] text-content md:text-base">
        Dmitry Demidovich
      </span>
    </NavLink>
  );
}

export function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useOutsideClick(navRef, closeMenu);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMenu, isOpen]);

  return (
    <header className={headerStyles}>
      <Container className={navContainerStyles}>
        <div ref={navRef} className={navStyles}>
          <nav aria-label="Primary navigation">
            <div className={desktopNavStyles}>
              <div className={desktopNavContentStyles}>
                <Brand />
                <ul className={navListStyles}>
                  {navLinks.map(({ label, to }) => (
                    <li key={label} className={navListItemStyles}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          cn(
                            navLinkStyles,
                            isActive
                              ? navLinkActiveStyles
                              : navLinkInactiveStyles,
                          )
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
                  ref={menuButtonRef}
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className={mobileMenuButtonStyles}
                  aria-expanded={isOpen}
                  aria-controls="mobile-navigation"
                  aria-label={`${isOpen ? 'Close' : 'Open'} navigation menu`}
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
            <div id="mobile-navigation" className={mobileMenuStyles}>
              <ul className={mobileMenuListStyles}>
                {navLinks.map(({ label, to }) => (
                  <li key={label} className={mobileMenuItemStyles}>
                    <NavLink
                      to={to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          mobileNavLinkStyles,
                          isActive
                            ? mobileNavLinkActiveStyles
                            : mobileNavLinkInactiveStyles,
                        )
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
