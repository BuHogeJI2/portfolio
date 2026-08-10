import clsx from 'clsx';
import { ReactElement, useState } from 'react';
import {
  imageStyles,
  imageContainerStyles,
  imageFallbackStyles,
} from './image.styles';

export interface IImageProps {
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackClassName?: string;
  lazyLoading?: boolean;
}

export function Image({
  imageSrc,
  alt,
  width,
  height,
  className,
  fallbackClassName,
  lazyLoading = false,
}: IImageProps): ReactElement {
  return (
    <ImageContent
      key={imageSrc}
      imageSrc={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fallbackClassName={fallbackClassName}
      lazyLoading={lazyLoading}
    />
  );
}

function ImageContent({
  imageSrc,
  alt,
  width,
  height,
  className,
  fallbackClassName,
  lazyLoading = false,
}: IImageProps): ReactElement {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={clsx(imageFallbackStyles, fallbackClassName)}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <span className="text-sm text-content-subtle">Image not available</span>
      </div>
    );
  }

  return (
    <div className={imageContainerStyles}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazyLoading ? 'lazy' : 'eager'}
        decoding="async"
        className={clsx(imageStyles, className)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
