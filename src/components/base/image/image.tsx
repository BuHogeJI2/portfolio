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
  className?: string;
  skeletonClassName?: string;
  lazyLoading?: boolean;
}

export function Image({
  imageSrc,
  alt,
  className,
  skeletonClassName,
  lazyLoading = true,
}: IImageProps): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isMountedRef = useRef(true);

  // Reset state when imageSrc changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    isMountedRef.current = true;

    // Check if image is already loaded (cached) after DOM update
    // Use setTimeout to ensure the img element has been rendered
    const checkCachedImage = () => {
      if (imgRef.current?.complete && imgRef.current?.naturalHeight !== 0) {
        setIsLoading(false);
      }
    };

    // Check immediately and after a microtask to catch cached images
    checkCachedImage();
    const timeoutId = setTimeout(checkCachedImage, 0);

    return () => {
      clearTimeout(timeoutId);
      isMountedRef.current = false;
    };
  }, [imageSrc]);

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
          aria-label="Loading image..."
        />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
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
          aria-label="Failed to load image"
        >
          <span className="text-sm text-gray-400">Image not available</span>
        </div>
      )}
    </div>
  );
}
