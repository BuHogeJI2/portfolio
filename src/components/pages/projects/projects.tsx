import { ReactElement } from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { ActionLink } from '@/components/base/action-link/action-link';
import { Container } from '@/components/base/container/container';
import { Image } from '@/components/base/image/image';
import { PageIntro } from '@/components/base/page-intro/page-intro';
import { Reveal } from '@/components/base/reveal/reveal';
import { SectionHeading } from '@/components/base/section-heading/section-heading';
import { Surface } from '@/components/base/surface/surface';
import { Tag } from '@/components/base/tag/tag';
import { featuredProject, projects, TProject } from './project.const';

const secondaryProjects = projects.filter(project => !project.featured);

interface IProjectMetadataProps {
  project: TProject;
}

function ProjectMetadata({ project }: IProjectMetadataProps): ReactElement {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      <Surface variant="subtle" padding="small">
        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-content-subtle">
          Role
        </dt>
        <dd className="mt-2 text-sm leading-6 text-content">{project.role}</dd>
      </Surface>
      <Surface variant="subtle" padding="small">
        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-content-subtle">
          Product challenge
        </dt>
        <dd className="mt-2 text-sm leading-6 text-content">
          {project.challenge}
        </dd>
      </Surface>
    </dl>
  );
}

export function Projects(): ReactElement {
  return (
    <Container className="space-y-16 md:space-y-24">
      <PageIntro
        eyebrow="Selected work"
        title="Frontend work shaped around real product complexity."
        description="Travel platforms are full of dense content, comparison, and transactional decisions. These projects show the kind of responsive product interfaces and frontend systems I have worked on."
        actions={
          <>
            <ActionLink to="/contact" variant="primary">
              Discuss a project
              <FaArrowRight className="h-3.5 w-3.5" />
            </ActionLink>
            <ActionLink
              href="/files/cv_demidovich_2026.pdf"
              variant="secondary"
              download
            >
              Download CV
            </ActionLink>
          </>
        }
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured case study"
          title={featuredProject.title}
          description={featuredProject.summary}
        />

        <Reveal variant="featured">
          <Surface
            variant="elevated"
            padding="none"
            className="overflow-hidden"
          >
            <article className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-surface-subtle">
                <Image
                  imageSrc={featuredProject.image}
                  alt={`${featuredProject.title} travel interface`}
                  width={featuredProject.imageWidth}
                  height={featuredProject.imageHeight}
                  className="aspect-[16/11] object-cover lg:h-full"
                  skeletonClassName="aspect-[16/11] lg:h-full"
                  lazyLoading={false}
                />
              </div>

              <div className="flex flex-col justify-between gap-8 p-6 md:p-8 lg:p-10">
                <div className="space-y-6">
                  <ProjectMetadata project={featuredProject} />

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      Contribution
                    </h3>
                    <p className="leading-7 text-content-muted">
                      {featuredProject.contribution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      Why it matters
                    </h3>
                    <p className="leading-7 text-content-muted">
                      {featuredProject.value}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map(technology => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>
                </div>

                <ActionLink
                  href={featuredProject.href}
                  external
                  variant="primary"
                  className="self-start"
                >
                  Visit live project
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                </ActionLink>
              </div>
            </article>
          </Surface>
        </Reveal>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="More product work"
          title="Related platforms, different product pressures."
          description="Each project uses the same core frontend discipline while serving a different mix of discovery, booking, business, or corporate communication needs."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {secondaryProjects.map(project => (
            <Surface
              key={project.id}
              className="flex h-full flex-col"
              padding="none"
            >
              <article className="flex h-full flex-col">
                <div className="overflow-hidden rounded-t-surface bg-surface-subtle">
                  <Image
                    imageSrc={project.image}
                    alt={`${project.title} project interface`}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    className="aspect-[16/9] object-cover"
                    skeletonClassName="aspect-[16/9]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {project.role}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-content">
                      {project.title}
                    </h3>
                    <p className="leading-7 text-content-muted">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-content">
                      Frontend contribution
                    </h4>
                    <p className="text-sm leading-6 text-content-muted">
                      {project.contribution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(technology => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>

                  <ActionLink
                    href={project.href}
                    external
                    variant="secondary"
                    className="mt-auto self-start"
                  >
                    Visit project
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  </ActionLink>
                </div>
              </article>
            </Surface>
          ))}
        </div>
      </section>
    </Container>
  );
}
