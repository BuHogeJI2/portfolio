import { ReactElement } from 'react';
import { socialBlocks } from './social-links.const';
import { NavLink } from 'react-router-dom';
import {
  socialBlockContainerStyles,
  socialBlockItemContentStyles,
  socialBlockItemIconStyles,
  socialBlockItemLabelStyles,
  socialBlockItemStyles,
} from './social-block.styles';

export function SocialBlocks(): ReactElement {
  return (
    <div className={socialBlockContainerStyles}>
      {socialBlocks.map(block => {
        const isDownloadLink = block.href.endsWith('.pdf');

        if (isDownloadLink) {
          return (
            <a
              key={block.href}
              href={block.href}
              className={socialBlockItemStyles}
              download
            >
              <div className={socialBlockItemContentStyles}>
                <span className={socialBlockItemLabelStyles}>
                  {block.label}
                </span>
                <span className={socialBlockItemIconStyles}>{block.icon}</span>
              </div>
            </a>
          );
        }

        return (
          <NavLink
            className={socialBlockItemStyles}
            key={block.href}
            to={block.href}
          >
            <div className={socialBlockItemContentStyles}>
              <span className={socialBlockItemLabelStyles}>{block.label}</span>
              <span className={socialBlockItemIconStyles}>{block.icon}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
