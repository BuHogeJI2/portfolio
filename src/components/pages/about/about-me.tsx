import { ReactElement } from 'react';
import { ActionLink } from '@/components/base/action-link/action-link';
import { Image } from '@/components/base/image/image';
import { PageIntro } from '@/components/base/page-intro/page-intro';
import { SectionHeading } from '@/components/base/section-heading/section-heading';
import { Surface } from '@/components/base/surface/surface';
import { Tag } from '@/components/base/tag/tag';
import { aboutHighlights, aboutStrengths, experience } from './about-me.const';

export function AboutMe(): ReactElement {
  return (
    <div className="space-y-16 py-12 md:space-y-24 md:py-20">
      <PageIntro
        eyebrow="About"
        title="Frontend engineering with a product mindset."
        description="I turn complex requirements into clear, dependable interfaces—combining hands-on React delivery with thoughtful product decisions."
        actions={
          <>
            <ActionLink to="/contact" size="large">
              Contact me
            </ActionLink>
            <ActionLink
              href="/files/cv_demidovich_2026.pdf"
              download
              variant="secondary"
              size="large"
            >
              Download CV
            </ActionLink>
            <ActionLink to="/projects" variant="text" size="large">
              View projects
            </ActionLink>
          </>
        }
      />

      <section
        className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        aria-labelledby="about-story-title"
      >
        <Surface padding="none" variant="elevated" className="overflow-hidden">
          <Image
            imageSrc="/images/photos/bold.jpg"
            alt="Dmitry Dziamidovich outdoors"
            className="aspect-[4/5] h-full w-full object-cover"
            skeletonClassName="aspect-[4/5]"
          />
        </Surface>

        <div className="space-y-6">
          <SectionHeading
            titleId="about-story-title"
            eyebrow="My approach"
            title="Useful software starts with understanding the real problem."
            description="I care about the product behind the pixels: the user journey, the team maintaining it, and the business goal each interaction supports."
          />

          <Surface className="space-y-5 text-base leading-8 text-content-muted md:text-lg">
            <p>
              Since starting my frontend career in 2020, I have focused on
              building modern, user-centred web applications with React and
              TypeScript.
            </p>
            <p>
              Much of that work has been in travel products, where interfaces
              need to make dense information, interactive maps, advanced
              filters, and booking flows feel straightforward.
            </p>
            <p>
              I enjoy working where product thinking and engineering meet:
              reducing complexity, establishing reusable patterns, and polishing
              the moments that shape how a product feels to use.
            </p>
          </Surface>

          <div className="grid gap-4 sm:grid-cols-2">
            <Surface variant="subtle" padding="small">
              <p className="text-3xl font-semibold tracking-tight text-content">
                {experience}+
              </p>
              <p className="mt-1 text-sm text-content-muted">
                Years in frontend development
              </p>
            </Surface>
            <Surface variant="subtle" padding="small">
              <p className="text-3xl font-semibold tracking-tight text-content">
                10+
              </p>
              <p className="mt-1 text-sm text-content-muted">
                Products and projects contributed to
              </p>
            </Surface>
          </div>
        </div>
      </section>

      <section className="space-y-8" aria-labelledby="about-journey-title">
        <SectionHeading
          titleId="about-journey-title"
          eyebrow="Experience"
          title="A journey shaped by increasingly complex product work."
          description="The through-line is consistent: understand the workflow, make the interface clearer, and leave the frontend easier to evolve."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {aboutHighlights.map(highlight => (
            <Surface key={highlight.title} className="h-full">
              <Tag>{highlight.label}</Tag>
              <h3 className="mt-6 text-xl font-semibold text-content">
                {highlight.title}
              </h3>
              <p className="mt-3 leading-7 text-content-muted">
                {highlight.description}
              </p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="space-y-8" aria-labelledby="about-strengths-title">
        <SectionHeading
          titleId="about-strengths-title"
          eyebrow="What I bring"
          title="A balanced contribution across interface, system, and team."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {aboutStrengths.map(strength => (
            <Surface key={strength.title} variant="subtle" className="h-full">
              <h3 className="text-lg font-semibold text-content">
                {strength.title}
              </h3>
              <p className="mt-3 leading-7 text-content-muted">
                {strength.description}
              </p>
            </Surface>
          ))}
        </div>
      </section>

      <section>
        <Surface variant="elevated" padding="large">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHeading
              eyebrow="Work together"
              title="Have a product challenge that needs clearer frontend thinking?"
              description="Share the context and I’ll help determine where interface craft, product judgement, and implementation can make the strongest contribution."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ActionLink to="/contact" size="large">
                Contact me
              </ActionLink>
              <ActionLink
                href="/files/cv_demidovich_2026.pdf"
                download
                variant="secondary"
                size="large"
              >
                Download CV
              </ActionLink>
              <ActionLink to="/projects" variant="text" size="large">
                View projects
              </ActionLink>
            </div>
          </div>
        </Surface>
      </section>
    </div>
  );
}
