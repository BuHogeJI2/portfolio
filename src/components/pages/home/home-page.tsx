import { Container } from '@/components/base/container/container';
import { Avatar } from '@/components/pages/home/photos/avatar';
import { socialLinksData } from '@/components/pages/home/social-links/social-links.const';
import {
  featuredWorkTeaser,
  homeProcessSteps,
  homeProofItems,
  homeServiceCards,
} from './home-page.const';
import { motion, useReducedMotion } from 'motion/react';
import { ReactElement } from 'react';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { Link } from 'react-router-dom';

type RevealOptions = {
  delay?: number;
  amount?: number;
};

function getRevealProps(
  shouldReduceMotion: boolean,
  { delay = 0, amount = 0.2 }: RevealOptions = {},
) {
  if (shouldReduceMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

function getSocialIcon(iconType: 'github' | 'linkedin' | 'upwork') {
  const iconMap = {
    github: <FaGithub className="h-4 w-4" />,
    linkedin: <FaLinkedin className="h-4 w-4" />,
    upwork: <SiUpwork className="h-4 w-4" />,
  };

  return iconMap[iconType];
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-default/80 dark:text-primary-dark/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

export function HomePageView(): ReactElement {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="pb-3 md:pb-4">
      <Container className="relative">
        <section className="pt-6 md:pt-10">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
            <motion.div
              className="relative space-y-6"
              {...getRevealProps(shouldReduceMotion)}
            >
              <div className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                Frontend Engineer for teams that care how the product feels
              </div>

              <div className="space-y-5">
                <p className="text-sm font-medium uppercase tracking-[0.26em] text-primary-default dark:text-primary-dark">
                  Dzmitry Dziamidovich
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white md:text-7xl lg:text-[5.4rem]">
                  I build polished product experiences that feel clear, fast,
                  and ready to trust.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
                  I help teams turn complex interface requirements into
                  responsive frontend experiences with stronger hierarchy,
                  cleaner interactions, and the kind of detail that makes a
                  product feel finished.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Start a conversation
                  <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300/80 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-colors duration-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  View selected work
                </Link>
                <a
                  href="/files/cv_demidovich_2026.pdf"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-2 py-3 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  download
                >
                  Download CV
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {socialLinksData.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/55 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur transition-colors duration-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                  >
                    {getSocialIcon(link.iconType)}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[380px] md:max-w-[440px]"
              {...getRevealProps(shouldReduceMotion, { delay: 0.08 })}
            >
              <div className="bg-primary-default/16 absolute inset-8 rounded-[2rem] blur-3xl dark:bg-primary-dark/10 md:inset-6" />
              <div className="bg-white/72 dark:bg-white/6 relative overflow-hidden rounded-[2rem] border border-white/70 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-white/10 dark:shadow-[0_30px_80px_rgba(2,6,23,0.5)] md:p-8">
                <div className="flex items-start justify-between text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  <span>Frontend Engineer</span>
                  <span>Product-focused UI</span>
                </div>
                <div className="mt-5 flex justify-center md:mt-8">
                  <Avatar
                    className="border-6 h-40 w-40 border-white/90 shadow-xl dark:border-slate-900/80 sm:h-44 sm:w-44 md:h-72 md:w-72 md:border-8 md:shadow-2xl"
                    skeletonClassName="h-40 w-40 sm:h-44 sm:w-44 md:h-72 md:w-72"
                  />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-8">
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      Product interfaces, redesign polish, and frontend systems
                      that support real teams.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Domain depth
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      Search-heavy travel and booking flows where clarity and
                      trust directly matter.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="mt-10 md:mt-14"
          {...getRevealProps(shouldReduceMotion, { delay: 0.04 })}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {homeProofItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-white/68 rounded-[1.75rem] border border-white/70 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5"
                {...getRevealProps(shouldReduceMotion, {
                  delay: index * 0.06,
                  amount: 0.35,
                })}
              >
                <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-default dark:text-primary-dark">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 space-y-8 md:mt-20 md:space-y-9"
          {...getRevealProps(shouldReduceMotion)}
        >
          <SectionHeading
            eyebrow="What I bring"
            title="Frontend work that improves how the product is understood and trusted."
            description="The value is not only in building screens. It is in helping the product feel clearer, more deliberate, and easier to use under real-world complexity."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {homeServiceCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white/68 rounded-[1.75rem] border border-white/70 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5"
                {...getRevealProps(shouldReduceMotion, {
                  delay: index * 0.06,
                  amount: 0.22,
                })}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-default dark:text-primary-dark">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 space-y-8 md:mt-20 md:space-y-9"
          {...getRevealProps(shouldReduceMotion)}
        >
          <SectionHeading
            eyebrow="Selected work"
            title="A quick look at the kind of product complexity I enjoy working on."
            description="Selected work from product environments where search, comparison, and decision-heavy flows needed to feel clearer, faster, and easier to trust."
          />

          <div className="bg-white/72 grid gap-6 overflow-hidden rounded-[2rem] border border-white/70 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-slate-950/40">
              <img
                src={featuredWorkTeaser.image}
                alt={featuredWorkTeaser.title}
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 p-3 md:p-5">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-default dark:text-primary-dark">
                    Featured project teaser
                  </p>
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {featuredWorkTeaser.title}
                  </h3>
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                    {featuredWorkTeaser.summary}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Role
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {featuredWorkTeaser.role}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {featuredWorkTeaser.value}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredWorkTeaser.stack.map(tech => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200/90 bg-slate-50/85 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Explore projects
                  <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={featuredWorkTeaser.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-colors duration-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  Visit live project
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mt-14 space-y-8 md:mt-20 md:space-y-9"
          {...getRevealProps(shouldReduceMotion)}
        >
          <SectionHeading
            eyebrow="How I work"
            title="The collaboration is meant to feel as clear as the interface."
            description="I work best when the process stays practical: understand the product pressure, make the UI calmer, and keep delivery disciplined enough that the quality holds up."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white/68 rounded-[1.75rem] border border-white/70 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5"
                {...getRevealProps(shouldReduceMotion, {
                  delay: index * 0.05,
                  amount: 0.24,
                })}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-default dark:text-primary-dark">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 md:mt-20"
          {...getRevealProps(shouldReduceMotion)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(240,247,245,0.88))] px-6 py-8 text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.92))] dark:text-white md:px-10 md:py-12">
            <div className="bg-primary-default/18 absolute inset-y-0 right-[-10%] w-[45%] rounded-full blur-3xl dark:bg-primary-dark/15" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-default/50 to-transparent dark:via-primary-dark/40" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-default/80 dark:text-white/70">
                  Start the conversation
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  If the product needs sharper frontend thinking and stronger UI
                  polish, I can help.
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-white/75 md:text-lg">
                  Whether the work is a redesign, a high-value frontend build,
                  or a product experience that needs to feel more trustworthy, I
                  aim to bring both execution and taste to the table.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <FaEnvelope className="h-4 w-4" />
                  Contact me
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300/80 bg-white/55 px-7 py-3 text-sm font-semibold text-slate-800 transition-colors duration-300 hover:bg-white dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                >
                  Review projects
                </Link>
                <a
                  href="/files/cv_demidovich_2026.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </Container>
    </div>
  );
}
