import { Container } from '@/components';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export function ErrorPage(): ReactElement {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-3xl font-bold">404 - Page Not Found</div>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Go back home
        </Link>
      </div>
    </Container>
  );
}
