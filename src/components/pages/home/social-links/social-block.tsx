import { ReactElement } from 'react';
import { socialBlocks } from './social-links.const';
import { NavLink } from 'react-router-dom';

export function SocialBlocks(): ReactElement {
  return (
    <div className="mx-auto flex h-full min-h-[200px] w-fit flex-1 items-center gap-4 pt-4 md:w-full md:justify-center">
      {socialBlocks.map(block => (
        <NavLink
          className="flex items-center gap-4 rounded-full border border-slate-200 bg-white px-8 py-4 shadow-lg hover:cursor-pointer hover:bg-slate-50 dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md dark:hover:bg-slate-800/50"
          key={block.href}
          to={block.href}
          target="_blank"
        >
          <div className="flex items-center gap-4">
            <span className="text-md font-medium text-secondary-default dark:text-secondary-dark">
              {block.label}
            </span>
            {block.icon}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
