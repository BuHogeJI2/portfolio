import clsx from 'clsx';
import { useTheme } from '@/contexts/theme-context';
import { ETheme } from '@/components/base/navbar/navbar.types';
import { Image } from '@/components/base/image/image';

interface AvatarProps {
  className?: string;
  skeletonClassName?: string;
}

export function Avatar({ className, skeletonClassName }: AvatarProps) {
  const { theme } = useTheme();

  const imageSrc =
    theme === ETheme.LIGHT
      ? '/images/photos/me-ai.png'
      : '/images/photos/me-ai-2.png';

  return (
    <Image
      imageSrc={imageSrc}
      alt="Portrait of Dzmitry Dziamidovich"
      className={clsx(
        'h-28 w-28 rounded-full border-2 border-white object-cover md:h-40 md:w-40',
        className,
      )}
      skeletonClassName={clsx(
        'h-28 w-28 rounded-full md:h-40 md:w-40',
        skeletonClassName,
      )}
      lazyLoading={false}
    />
  );
}
