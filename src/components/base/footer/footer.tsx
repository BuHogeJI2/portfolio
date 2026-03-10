import { ReactElement } from 'react';
import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaUser,
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@/components/base/navbar/navbar';
import { socialLinksData } from '@/components/pages/home/social-links/social-links.const';
import { BuiltWith } from './built-with';
import {
  footerAvailabilityBadgeStyles,
  footerAvailabilityStyles,
  footerBottomStyles,
  footerContactInfoStyles,
  footerContactLinkStyles,
  footerContainerStyles,
  footerCopyrightStyles,
  footerGridStyles,
  footerNavIconStyles,
  footerNavItemStyles,
  footerNavLinkStyles,
  footerNavListStyles,
  footerSectionTitleStyles,
  footerSectionTwoColStyles,
  footerSocialIconStyles,
  footerSocialItemStyles,
  footerSocialLinkStyles,
  footerSocialListStyles,
  footerStyles,
  footerTaglineStyles,
  footerTopBorderStyles,
} from './footer.styles';

// Map navigation routes to icons
const getNavIcon = (to: string): ReactElement => {
  const iconMap: Record<string, ReactElement> = {
    '/': <FaHome />,
    '/about': <FaUser />,
    '/skills': <FaCode />,
    '/projects': <FaFolderOpen />,
    '/contact': <FaEnvelope />,
  };
  return iconMap[to] || <FaHome />;
};

// Map social link icon types to icons
const getSocialIcon = (
  iconType: 'github' | 'linkedin' | 'upwork',
): ReactElement => {
  const iconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    upwork: <SiUpwork />,
  };
  return iconMap[iconType];
};

export function Footer(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles}>
      <div className={footerTopBorderStyles} />
      <div className={footerContainerStyles}>
        <div className={footerGridStyles}>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className={footerSectionTitleStyles}>Close</p>
              <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Product-facing frontend work with more polish, more clarity, and
                less noise.
              </h3>
              <p className={footerTaglineStyles}>
                I help turn complex requirements into interfaces that feel more
                intentional, easier to trust, and better aligned with product
                goals.
              </p>
            </div>

            <div className={footerContactInfoStyles}>
              <NavLink
                to="/contact"
                className={`${footerContactLinkStyles} bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100`}
              >
                <FaEnvelope className={footerNavIconStyles} />
                <span>Start a conversation</span>
              </NavLink>
              <a
                href="/files/cv_demidovich_2026.pdf"
                className={`${footerContactLinkStyles} border-slate-300/80 bg-white/70 text-slate-800 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10`}
                aria-label="Download CV"
                download
              >
                <FaDownload className={footerNavIconStyles} />
                <span>Download CV</span>
              </a>
            </div>
            <div className={footerAvailabilityStyles}>
              <span className={footerAvailabilityBadgeStyles}>
                Available for freelance work
              </span>
            </div>
          </div>

          <div className={footerSectionTwoColStyles}>
            <div className="space-y-4">
              <h3 className={footerSectionTitleStyles}>Navigate</h3>
              <ul className={footerNavListStyles}>
                {navLinks.map(({ label, to }) => (
                  <li key={label} className={footerNavItemStyles}>
                    <NavLink to={to} className={footerNavLinkStyles}>
                      <span className={footerNavIconStyles}>
                        {getNavIcon(to)}
                      </span>
                      <span>{label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-4 md:mt-10">
              <h3 className={footerSectionTitleStyles}>Connect</h3>
              <ul className={footerSocialListStyles}>
                {socialLinksData.map(({ label, href, iconType }) => (
                  <li key={label} className={footerSocialItemStyles}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={footerSocialLinkStyles}
                      aria-label={label}
                    >
                      <span className={footerSocialIconStyles}>
                        {getSocialIcon(iconType)}
                      </span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={footerBottomStyles}>
          <div className="space-y-2">
            <p className={footerCopyrightStyles}>
              &copy; {currentYear} Dzmitry Dziamidovich. All rights reserved.
            </p>
            <BuiltWith />
          </div>
        </div>
      </div>
    </footer>
  );
}
