import { ReactElement } from 'react';
import { ActionLink } from '@/components/base/action-link/action-link';
import { PageIntro } from '@/components/base/page-intro/page-intro';
import { Surface } from '@/components/base/surface/surface';
import { Tag } from '@/components/base/tag/tag';
import { capabilityGroups } from './skills.const';

export function Skills(): ReactElement {
  return (
    <div className="space-y-12 py-12 md:space-y-16 md:py-20">
      <PageIntro
        eyebrow="Capabilities"
        title="The skills behind clear, resilient product experiences."
        description="My toolkit is broad, but the outcome matters more than the logo: understandable interfaces, reusable frontend systems, and dependable delivery."
        actions={
          <>
            <ActionLink to="/contact" size="large">
              Discuss a project
            </ActionLink>
            <ActionLink to="/projects" variant="secondary" size="large">
              See the work
            </ActionLink>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {capabilityGroups.map(group => (
          <Surface
            key={group.id}
            variant={group.secondary ? 'subtle' : 'default'}
            className="flex h-full flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-content md:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-3 leading-7 text-content-muted">
                  {group.summary}
                </p>
              </div>
              {group.secondary && <Tag tone="accent">Supporting layer</Tag>}
            </div>

            <ul className="mt-7 space-y-3" aria-label="Core strengths">
              {group.strengths.map(strength => (
                <li
                  key={strength}
                  className="flex gap-3 leading-7 text-content"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {strength}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {group.technologies.map(technology => (
                <Tag
                  key={technology.name}
                  icon={
                    <img
                      src={technology.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                    />
                  }
                >
                  {technology.name}
                </Tag>
              ))}
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
