import { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export type TActionLinkVariant = 'primary' | 'secondary' | 'tertiary';
export type TActionLinkSize = 'small' | 'medium' | 'large';

interface IActionLinkBaseProps {
  children: ReactNode;
  variant?: TActionLinkVariant;
  size?: TActionLinkSize;
  className?: string;
  ariaLabel?: string;
}

interface IInternalActionLinkProps extends IActionLinkBaseProps {
  to: string;
  href?: never;
  external?: never;
  download?: never;
}

interface IExternalActionLinkProps extends IActionLinkBaseProps {
  href: string;
  to?: never;
  external?: boolean;
  download?: boolean | string;
}

export type TActionLinkProps =
  | IInternalActionLinkProps
  | IExternalActionLinkProps;

const variantStyles: Record<TActionLinkVariant, string> = {
  primary:
    'bg-content text-content-inverse shadow-sm hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-elevated active:translate-y-0 active:shadow-sm',
  secondary:
    'border border-line/80 bg-surface/75 text-content shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:shadow-surface active:translate-y-0 active:shadow-sm dark:border-line/10',
  tertiary:
    'border border-accent/15 bg-accent/10 text-content shadow-sm hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/20 hover:shadow-surface active:translate-y-0 active:shadow-sm',
};

const sizeStyles: Record<TActionLinkSize, string> = {
  small: 'min-h-10 px-4 py-2 text-sm',
  medium: 'min-h-11 px-6 py-2.5 text-sm',
  large: 'min-h-12 px-7 py-3 text-sm',
};

export function ActionLink(props: TActionLinkProps): ReactElement {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    className,
    ariaLabel,
  } = props;
  const styles = cn(
    'inline-flex items-center justify-center gap-3 rounded-control font-semibold transition duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ('href' in props && props.href !== undefined) {
    return (
      <a
        href={props.href}
        className={styles}
        aria-label={ariaLabel}
        target={props.external ? '_blank' : undefined}
        rel={props.external ? 'noopener noreferrer' : undefined}
        download={props.download}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={props.to} className={styles} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
