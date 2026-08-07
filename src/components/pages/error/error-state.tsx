import { ReactElement } from 'react';
import { ActionLink } from '@/components/base/action-link/action-link';
import { Container } from '@/components/base/container/container';
import { PageIntro } from '@/components/base/page-intro/page-intro';
import { Surface } from '@/components/base/surface/surface';

interface IErrorStateProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function ErrorState({
  eyebrow,
  title,
  description,
}: IErrorStateProps): ReactElement {
  return (
    <Container>
      <div className="flex min-h-[52vh] items-center justify-center py-12 md:py-20">
        <Surface variant="elevated" className="w-full max-w-3xl">
          <PageIntro
            eyebrow={eyebrow}
            title={title}
            description={description}
            alignment="center"
            actions={
              <>
                <ActionLink to="/" size="large">
                  Return home
                </ActionLink>
                <ActionLink to="/contact" variant="secondary" size="large">
                  Contact me
                </ActionLink>
              </>
            }
          />
        </Surface>
      </div>
    </Container>
  );
}
