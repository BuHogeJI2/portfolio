import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@/components/container/container';
import { NavbarActionButton } from './navbar-action-button';
import { NavItem, ENavbarActionButtonType } from './navbar.types';

const navLinks: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-[999] w-full">
      <Container>
        <div className="relative">
          <nav className="flex items-center justify-center py-4 pt-12">
            {/* Desktop Navigation */}
            <div className="hidden w-full md:block">
              <div className="flex items-center justify-between">
                <NavbarActionButton
                  type={ENavbarActionButtonType.THEME_TOGGLE}
                />
                <ul className="mx-12 flex flex-1 items-center justify-between rounded-full border border-slate-200 bg-white px-8 py-2 shadow-lg dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md">
                  {navLinks.map(({ label, to }) => (
                    <li key={label}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `relative rounded-full px-8 py-2 text-base font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                            isActive
                              ? 'text-primary-default dark:text-primary-dark'
                              : 'text-secondary-default hover:text-primary-default dark:text-secondary-dark dark:hover:text-primary-dark'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <NavbarActionButton
                  type={ENavbarActionButtonType.LANGUAGE_TOGGLE}
                />
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block rounded-full border border-slate-200 bg-white p-2 shadow-lg md:hidden dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md"
            >
              <svg
                className="text-secondary-DEFAULT dark:text-secondary-dark h-6 w-6"
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
            <div className="md:hidden">
              <ul className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md">
                {navLinks.map(({ label, to }) => (
                  <li key={label} className="mb-2">
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-8 py-2 text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-primary-DEFAULT dark:text-primary-dark bg-slate-100 dark:bg-slate-800'
                            : 'text-secondary-DEFAULT hover:text-primary-DEFAULT dark:text-secondary-dark dark:hover:text-primary-dark hover:bg-slate-50 dark:hover:bg-slate-800/50'
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
