import { ReactElement } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { PageBackground } from '@/components/base/page-background';
import { ErrorState } from '@/components/pages/error/error-state';

export function RouteErrorPage(): ReactElement {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <PageBackground>
      <main className="relative z-10 flex min-h-screen items-center py-12">
        <ErrorState
          eyebrow={isNotFound ? '404' : 'Route error'}
          title={
            isNotFound
              ? 'This page could not be found.'
              : 'Something interrupted this page.'
          }
          description={
            isNotFound
              ? 'The address may be outdated or mistyped. Use one of the links below to continue.'
              : 'The requested page could not be loaded. You can return home or contact me if the problem continues.'
          }
        />
      </main>
    </PageBackground>
  );
}
