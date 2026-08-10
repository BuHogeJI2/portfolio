import clsx from 'clsx';
import { useTheme } from '@/contexts/theme-context';
import { ETheme } from '@/components/base/navbar/navbar.types';
import { Image } from '@/components/base/image/image';

interface AvatarProps {
  className?: string;
  fallbackClassName?: string;
}

export function Avatar({ className, fallbackClassName }: AvatarProps) {
  const { theme } = useTheme();

  const imageSrc =
    theme === ETheme.LIGHT
      ? '/images/photos/duck_tag.webp'
      : '/images/photos/coffee.webp';

  return (
    <Image
      imageSrc={imageSrc}
      alt="Portrait of Dzmitry Dziamidovich"
      width={1254}
      height={1254}
      className={clsx(
        'h-28 w-28 rounded-full border-2 border-white object-cover md:h-40 md:w-40',
        className,
      )}
      fallbackClassName={clsx(
        'h-28 w-28 rounded-full md:h-40 md:w-40',
        fallbackClassName,
      )}
      lazyLoading={false}
    />
  );
}
