import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@/components/container/container';

interface NavItem {
  label: string;
  to: string;
}

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
                <button className="rounded-full border border-slate-200/50 bg-white/60 p-2 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-900/60 dark:hover:bg-slate-900/80">
                  <div className="h-6 w-6"></div>
                </button>
                <ul className="mx-12 flex flex-1 items-center justify-between rounded-full border border-slate-200/50 bg-white/60 px-8 py-2 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/60">
                  {navLinks.map(({ label, to }) => (
                    <li key={label}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `relative rounded-full px-4 py-2 text-base font-medium transition-all duration-300 ${
                            isActive
                              ? 'text-primary-DEFAULT dark:text-primary-dark'
                              : 'hover:text-primary-DEFAULT dark:hover:text-primary-dark text-slate-700 dark:text-slate-300'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <button className="rounded-full border border-slate-200/50 bg-white/60 p-2 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-900/60 dark:hover:bg-slate-900/80">
                  <div className="h-6 w-6"></div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-slate-200/50 bg-white/60 p-2 backdrop-blur-md md:hidden dark:border-slate-700/50 dark:bg-slate-900/60"
            >
              <svg
                className="h-6 w-6 text-slate-600 dark:text-slate-300"
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
              <ul className="rounded-lg border border-slate-200/50 bg-white/60 p-4 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/60">
                {navLinks.map(({ label, to }) => (
                  <li key={label} className="mb-2">
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-2 text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-primary-DEFAULT dark:text-primary-dark bg-slate-100 dark:bg-slate-800'
                            : 'hover:text-primary-DEFAULT dark:hover:text-primary-dark text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
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
