import { ReactElement } from 'react';
import {
  footerBuiltWithLinkStyles,
  footerBuiltWithStyles,
} from './footer.styles';

interface TechStackItem {
  name: string;
  url: string;
}

const techStack: TechStackItem[] = [
  { name: 'React', url: 'https://react.dev' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
  { name: 'Vite', url: 'https://vitejs.dev' },
  { name: 'Cursor', url: 'https://cursor.sh' },
];

export function BuiltWith(): ReactElement {
  return (
    <div className={footerBuiltWithStyles}>
      <span>Built with </span>
      {techStack.map((tech, index) => (
        <span key={tech.name}>
          <a
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={footerBuiltWithLinkStyles}
          >
            {tech.name}
          </a>
          {index < techStack.length - 1 && <span>, </span>}
        </span>
      ))}
    </div>
  );
}
