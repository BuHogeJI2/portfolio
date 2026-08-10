import { ReactElement } from 'react';
import { ActionLink } from '@/components/base/action-link/action-link';
import { Container } from '@/components/base/container/container';
import { PageIntro } from '@/components/base/page-intro/page-intro';
import { SectionHeading } from '@/components/base/section-heading/section-heading';
import { Surface } from '@/components/base/surface/surface';
import { Tag } from '@/components/base/tag/tag';
import { ContactForm } from '@/components/pages/contact/contact-form';
import { socialLinksData } from '@/components/pages/home/social-links/social-links.const';

const email = 'dzmitrydziamidovich@gmail.com';

const projectFit = [
  'A product interface that needs clearer hierarchy or stronger polish',
  'A React or TypeScript build with complex user workflows',
  'A frontend system that needs more reusable, maintainable patterns',
];

export function ContactPage(): ReactElement {
  return (
    <Container>
      <div className="space-y-12 py-12 md:space-y-16 md:py-20">
        <PageIntro
          eyebrow="Contact"
          title="Have a frontend project in mind?"
          description="Share what you are building, what feels difficult, and where you need support. A concise outline is enough to start."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-6">
            <Surface className="space-y-6">
              <SectionHeading
                title="A good fit"
                description="I am most useful when product thinking, frontend architecture, and interface craft all matter."
              />
              <ul className="space-y-4">
                {projectFit.map(item => (
                  <li key={item} className="flex gap-3 leading-7 text-content">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Tag tone="accent">Available for freelance conversations</Tag>
            </Surface>

            <Surface variant="subtle" className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  What happens next
                </p>
                <h2 className="mt-3 text-xl font-semibold text-content">
                  You’ll get a practical first reply.
                </h2>
                <p className="mt-3 leading-7 text-content-muted">
                  I’ll review the context and reply by email so we can clarify
                  scope, timing, and fit.
                </p>
              </div>

              <div className="border-t border-line/70 pt-5 dark:border-line/10">
                <p className="text-sm text-content-muted">
                  Prefer email? Write directly to
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-block break-all font-semibold text-content underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  {email}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {socialLinksData.map(link => (
                  <ActionLink
                    key={link.label}
                    href={link.href}
                    external
                    variant="secondary"
                    size="small"
                  >
                    {link.label}
                  </ActionLink>
                ))}
              </div>
            </Surface>
          </div>

          <Surface variant="elevated" className="lg:sticky lg:top-32">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Project enquiry
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-content md:text-3xl">
                Tell me what you need help with.
              </h2>
              <p className="mt-3 leading-7 text-content-muted">
                Your email and a short description are all I need for the first
                reply.
              </p>
            </div>
            <ContactForm />
          </Surface>
        </div>
      </div>
    </Container>
  );
}
