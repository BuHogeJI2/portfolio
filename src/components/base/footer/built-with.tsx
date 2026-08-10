import { ReactElement } from 'react';
interface ITechStackItem {
  name: string;
  url: string;
}

const techStack: ITechStackItem[] = [
  { name: 'React', url: 'https://react.dev' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
  { name: 'Vite', url: 'https://vitejs.dev' },
  { name: 'Codex', url: 'https://openai.com/codex/' },
];

export function BuiltWith(): ReactElement {
  return (
    <div className="text-xs text-content-subtle">
      <span>Built with </span>
      {techStack.map((tech, index) => (
        <span key={tech.name}>
          <a
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-accent transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            {tech.name}
          </a>
          {index < techStack.length - 1 && <span>, </span>}
        </span>
      ))}
    </div>
  );
}
