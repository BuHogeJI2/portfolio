import { Container } from '@/components/base/container/container';
import { ContactForm } from '@/components/pages/contact/contact-form';
import { ReactElement } from 'react';
import clsx from 'clsx';

const email = 'dzmitrydziamidovich@gmail.com';

export function ContactPage(): ReactElement {
  const containerStyles = clsx(
    'flex flex-col items-center justify-center space-y-4',
    'md:mt-16 mt-12',
  );

  const titleStyles = clsx(
    'text-4xl font-bold',
    'text-primary-default dark:text-white',
  );

  const descriptionStyles = clsx(
    'text-md',
    'text-info-default dark:text-info-dark',
  );

  const emailLinkStyles = clsx(
    'hover:underline',
    'text-primary-default dark:text-primary-dark',
  );

  return (
    <Container>
      <div className={containerStyles}>
        <h1 className={titleStyles}>Contact Me</h1>
        <p className={descriptionStyles}>
          You can contact me via email:{' '}
          <a className={emailLinkStyles} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
      <ContactForm />
    </Container>
  );
}
