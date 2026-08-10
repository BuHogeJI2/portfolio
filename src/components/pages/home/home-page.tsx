import { ReactElement } from 'react';
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { ActionLink } from '@/components/base/action-link/action-link';
import { Container } from '@/components/base/container/container';
import { Image } from '@/components/base/image/image';
import { PageIntro } from '@/components/base/page-intro/page-intro';
import { Reveal } from '@/components/base/reveal/reveal';
import { SectionHeading } from '@/components/base/section-heading/section-heading';
import { Surface } from '@/components/base/surface/surface';
import { Tag } from '@/components/base/tag/tag';
import { Avatar } from '@/components/pages/home/photos/avatar';
import { socialLinksData } from '@/components/pages/home/social-links/social-links.const';
import {
  featuredWorkTeaser,
  homeProcessSteps,
  homeProofItems,
  homeServiceCards,
} from './home-page.const';

type TSocialIconType = 'github' | 'linkedin' | 'upwork';

function getSocialIcon(iconType: TSocialIconType): ReactElement {
  const iconMap: Record<TSocialIconType, ReactElement> = {
    github: <FaGithub className="h-4 w-4" />,
    linkedin: <FaLinkedin className="h-4 w-4" />,
    upwork: <SiUpwork className="h-4 w-4" />,
  };

  return iconMap[iconType];
}

export function HomePageView(): ReactElement {
  return (
    <div className="pb-3 md:pb-4">
      <Container className="relative space-y-16 md:space-y-24">
        <section className="pt-6 md:pt-10">
          <Reveal variant="hero">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
              <div className="space-y-6">
                <Tag>
                  Frontend engineer for teams that care how the product feels
                </Tag>

                <PageIntro
                  eyebrow="Dzmitry Dziamidovich"
                  title="I build polished product experiences that feel clear, fast, and ready to trust."
                  description="I help teams turn complex interface requirements into responsive frontend experiences with stronger hierarchy, cleaner interactions, and the kind of detail that makes a product feel finished."
                  actions={
                    <>
                      <ActionLink to="/contact" variant="primary" size="large">
                        Start a conversation
                        <FaArrowRight className="h-3.5 w-3.5" />
                      </ActionLink>
                      <ActionLink
                        href="/files/cv_demidovich_2026.pdf"
                        variant="secondary"
                        size="large"
                        download
                      >
                        <FaDownload className="h-4 w-4" />
                        Download CV
                      </ActionLink>
                      <ActionLink to="/projects" variant="text" size="large">
                        View selected work
                      </ActionLink>
                    </>
                  }
                />

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {socialLinksData.map(link => (
                    <ActionLink
                      key={link.label}
                      href={link.href}
                      external
                      variant="secondary"
                      size="small"
                    >
                      {getSocialIcon(link.iconType)}
                      <span>{link.label}</span>
                    </ActionLink>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="pointer-events-none absolute inset-8 rounded-surface bg-accent/15 blur-3xl" />
                <Surface variant="elevated" className="relative">
                  <div className="flex items-start justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em] text-content-subtle">
                    <span>Frontend engineer</span>
                    <span>Product-focused UI</span>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Avatar
                      className="h-44 w-44 border-4 border-surface shadow-elevated sm:h-52 sm:w-52 md:h-72 md:w-72 md:border-8"
                      skeletonClassName="h-44 w-44 sm:h-52 sm:w-52 md:h-72 md:w-72"
                    />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Surface variant="subtle" padding="small">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-content-subtle">
                        Focus
                      </p>
                      <p className="mt-2 text-sm leading-6 text-content-muted">
                        Product interfaces, redesign polish, and frontend
                        systems that support real teams.
                      </p>
                    </Surface>
                    <Surface variant="subtle" padding="small">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-content-subtle">
                        Domain depth
                      </p>
                      <p className="mt-2 text-sm leading-6 text-content-muted">
                        Search-heavy travel and booking flows where clarity and
                        trust directly matter.
                      </p>
                    </Surface>
                  </div>
                </Surface>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {homeProofItems.map(item => (
                <Surface key={item.label} variant="subtle" padding="small">
                  <p className="text-3xl font-semibold tracking-tight text-content md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-content-muted">
                    {item.detail}
                  </p>
                </Surface>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-9">
          <SectionHeading
            eyebrow="What I bring"
            title="Frontend work that improves how the product is understood and trusted."
            description="The value is not only in building screens. It is in helping the product feel clearer, more deliberate, and easier to use under real-world complexity."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {homeServiceCards.map((card, index) => (
              <Surface key={card.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-content">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-content-muted">
                  {card.description}
                </p>
              </Surface>
            ))}
          </div>
        </section>

        <section className="space-y-9">
          <SectionHeading
            eyebrow="Selected work"
            title="A quick look at the kind of product complexity I enjoy working on."
            description="Selected work from product environments where search, comparison, and decision-heavy flows needed to feel clearer, faster, and easier to trust."
          />

          <Reveal variant="featured">
            <Surface
              variant="elevated"
              padding="none"
              className="overflow-hidden"
            >
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
                <div className="overflow-hidden bg-surface-subtle lg:rounded-card">
                  <Image
                    imageSrc={featuredWorkTeaser.image}
                    alt={`${featuredWorkTeaser.title} project interface`}
                    width={featuredWorkTeaser.imageWidth}
                    height={featuredWorkTeaser.imageHeight}
                    className="aspect-[16/10] object-cover"
                    skeletonClassName="aspect-[16/10]"
                  />
                </div>

                <div className="flex flex-col justify-between gap-6 p-6 lg:p-5">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Featured project
                      </p>
                      <h3 className="text-3xl font-semibold tracking-tight text-content">
                        {featuredWorkTeaser.title}
                      </h3>
                      <p className="text-base leading-7 text-content-muted">
                        {featuredWorkTeaser.summary}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Surface variant="subtle" padding="small">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-content-subtle">
                          Role
                        </p>
                        <p className="mt-2 text-sm leading-6 text-content">
                          {featuredWorkTeaser.role}
                        </p>
                      </Surface>
                      <Surface variant="subtle" padding="small">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-content-subtle">
                          Why it matters
                        </p>
                        <p className="mt-2 text-sm leading-6 text-content">
                          {featuredWorkTeaser.value}
                        </p>
                      </Surface>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredWorkTeaser.stack.map(technology => (
                        <Tag key={technology}>{technology}</Tag>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionLink to="/projects" variant="primary">
                      Explore projects
                      <FaArrowRight className="h-3.5 w-3.5" />
                    </ActionLink>
                    <ActionLink
                      href={featuredWorkTeaser.link}
                      external
                      variant="secondary"
                    >
                      Visit live project
                    </ActionLink>
                  </div>
                </div>
              </div>
            </Surface>
          </Reveal>
        </section>

        <section className="space-y-9">
          <SectionHeading
            eyebrow="How I work"
            title="The collaboration is meant to feel as clear as the interface."
            description="I work best when the process stays practical: understand the product pressure, make the UI calmer, and keep delivery disciplined enough that the quality holds up."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeProcessSteps.map((step, index) => (
              <Surface key={step.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-content">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-content-muted">
                  {step.description}
                </p>
              </Surface>
            ))}
          </div>
        </section>

        <section>
          <Surface
            variant="elevated"
            padding="large"
            className="relative overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-y-0 right-[-10%] w-[45%] rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <SectionHeading
                eyebrow="Start the conversation"
                title="If the product needs sharper frontend thinking and stronger UI polish, I can help."
                description="Whether the work is a redesign, a high-value frontend build, or a product experience that needs to feel more trustworthy, I aim to bring both execution and taste to the table."
              />

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ActionLink to="/contact" variant="primary" size="large">
                  <FaEnvelope className="h-4 w-4" />
                  Contact me
                </ActionLink>
                <ActionLink
                  href="/files/cv_demidovich_2026.pdf"
                  variant="secondary"
                  size="large"
                  download
                >
                  <FaDownload className="h-4 w-4" />
                  Download CV
                </ActionLink>
                <ActionLink to="/projects" variant="text" size="large">
                  Review projects
                </ActionLink>
              </div>
            </div>
          </Surface>
        </section>
      </Container>
    </div>
  );
}
