import { ReactElement } from 'react';
import { ErrorState } from '@/components/pages/error/error-state';

export function ErrorPage(): ReactElement {
  return (
    <ErrorState
      eyebrow="404"
      title="This page is not part of the portfolio."
      description="The address may be outdated or mistyped. Head back to the homepage, or get in touch if you were looking for something specific."
    />
  );
}
