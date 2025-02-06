import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    <header className="fixed z-[999] w-full">
      <div className="relative mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 backdrop-blur-md dark:border-black/40 dark:bg-gray-950/75">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-gray-950 dark:text-gray-200'
                          : 'text-gray-500 hover:text-gray-950 dark:hover:text-gray-200'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/40 bg-white/80 p-2 backdrop-blur-md md:hidden dark:border-black/40 dark:bg-gray-950/75"
          >
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
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
            <ul className="rounded-lg border border-white/40 bg-white/80 p-4 backdrop-blur-md dark:border-black/40 dark:bg-gray-950/75">
              {navLinks.map(({ label, to }) => (
                <li key={label} className="mb-2">
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-200'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-200'
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
    </header>
  );
}
