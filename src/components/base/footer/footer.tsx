import { ReactElement } from 'react';
import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaArrowRight,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaUser,
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { ActionLink } from '@/components/base/action-link/action-link';
import { Container } from '@/components/base/container/container';
import { navLinks } from '@/components/base/navbar/navbar';
import { SectionHeading } from '@/components/base/section-heading/section-heading';
import { Surface } from '@/components/base/surface/surface';
import { Tag } from '@/components/base/tag/tag';
import { socialLinksData } from '@/components/pages/home/social-links/social-links.const';
import { BuiltWith } from './built-with';

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
    <footer className="relative z-10 mt-3 py-8 md:py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line/70 to-transparent dark:via-line/10" />
      <Container>
        <Surface className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Work together"
              title="Need experienced frontend support for a complex product?"
              description="I help teams turn demanding requirements into clear, maintainable interfaces that are ready to ship."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink to="/contact" variant="primary">
                <FaEnvelope className="h-4 w-4" />
                <span>Start a conversation</span>
              </ActionLink>
              <ActionLink
                href="/files/cv_demidovich_2026.pdf"
                variant="secondary"
                download
              >
                <FaDownload className="h-4 w-4" />
                <span>Download CV</span>
              </ActionLink>
              <ActionLink to="/projects" variant="tertiary">
                Review projects
                <FaArrowRight className="h-3.5 w-3.5" />
              </ActionLink>
            </div>
            <Tag tone="accent">Available for freelance work</Tag>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Navigate
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {navLinks.map(({ label, to }) => (
                  <li key={label} className="list-none">
                    <NavLink
                      to={to}
                      className="inline-flex items-center gap-2 rounded-control border border-line/70 bg-surface-subtle/80 px-4 py-2 text-sm text-content-muted shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-content hover:shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus active:translate-y-0 dark:border-line/10"
                    >
                      <span className="h-4 w-4">{getNavIcon(to)}</span>
                      <span>{label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Connect
              </h3>
              <ul className="flex flex-wrap gap-3">
                {socialLinksData.map(({ label, href, iconType }) => (
                  <li key={label} className="list-none">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-control border border-line/70 bg-surface-subtle/80 px-4 py-2 text-sm text-content-muted shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-content hover:shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus active:translate-y-0 dark:border-line/10"
                      aria-label={label}
                    >
                      <span className="h-4 w-4">{getSocialIcon(iconType)}</span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-line/70 pt-6 text-sm text-content-subtle dark:border-line/10 md:col-span-2">
            <div className="space-y-2">
              <p className="text-sm">
                &copy; {currentYear} Dzmitry Dziamidovich. All rights reserved.
              </p>
              <BuiltWith />
            </div>
          </div>
        </Surface>
      </Container>
    </footer>
  );
}
