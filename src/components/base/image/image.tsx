import clsx from 'clsx';
import { ReactElement, useEffect, useRef, useState } from 'react';
import {
  imageStyles,
  imageContainerStyles,
  imageSkeletonStyles,
} from './image.styles';

export interface IImageProps {
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  skeletonClassName?: string;
  lazyLoading?: boolean;
}

export function Image({
  imageSrc,
  alt,
  width,
  height,
  className,
  skeletonClassName,
  lazyLoading = true,
}: IImageProps): ReactElement {
  return (
    <ImageContent
      key={imageSrc}
      imageSrc={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      skeletonClassName={skeletonClassName}
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
  skeletonClassName,
  lazyLoading = true,
}: IImageProps): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const checkCachedImage = () => {
      if (imgRef.current?.complete && imgRef.current?.naturalHeight !== 0) {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(checkCachedImage, 0);

    return () => {
      clearTimeout(timeoutId);
      isMountedRef.current = false;
    };
  }, []);

  const handleImageLoad = () => {
    if (isMountedRef.current) {
      setIsLoading(false);
    }
  };

  const handleImageError = () => {
    if (isMountedRef.current) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <div className={imageContainerStyles}>
      {isLoading && !hasError && (
        <div
          className={clsx(imageSkeletonStyles, skeletonClassName)}
          aria-hidden="true"
        />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazyLoading ? 'lazy' : 'eager'}
        decoding="async"
        className={clsx(imageStyles, className, {
          'opacity-0': isLoading && !hasError,
          'opacity-100': !isLoading && !hasError,
          hidden: hasError,
        })}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      {hasError && (
        <div
          className={clsx(imageSkeletonStyles, skeletonClassName)}
          role="img"
          aria-label={`Failed to load: ${alt}`}
        >
          <span className="text-sm text-content-subtle">
            Image not available
          </span>
        </div>
      )}
    </div>
  );
}
