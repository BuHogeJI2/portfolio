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
  footerSectionFullWidthStyles,
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
          {/* Navigation Section */}
          <div className={footerSectionTwoColStyles}>
            <h3 className={footerSectionTitleStyles}>Navigation</h3>
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

          {/* Connect Section */}
          <div className={footerSectionTwoColStyles}>
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

          {/* Contact & Resources Section */}
          <div className={footerSectionFullWidthStyles}>
            <h3 className={footerSectionTitleStyles}>Contact & Resources</h3>
            <div className={footerContactInfoStyles}>
              <NavLink to="/contact" className={footerContactLinkStyles}>
                <FaEnvelope className={footerNavIconStyles} />
                <span>Get in Touch</span>
              </NavLink>
              <a
                href="/files/cv_2025.pdf"
                className={footerContactLinkStyles}
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

          {/* About Section */}
          <div className={footerSectionFullWidthStyles}>
            <h3 className={footerSectionTitleStyles}>About</h3>
            <p className={footerTaglineStyles}>
              Making internet a better place, one line of code at a time.
            </p>
            <BuiltWith />
          </div>
        </div>

        {/* Bottom Section */}
        <div className={footerBottomStyles}>
          <p className={footerCopyrightStyles}>
            &copy; {currentYear} Dzmitry Dziamidovich. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
