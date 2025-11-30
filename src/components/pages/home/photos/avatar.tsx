import { useTheme } from '@/contexts/theme-context';
import { ETheme } from '@/components/base/navbar/navbar.types';
import { Image } from '@/components/base/image/image';

export function Avatar() {
  const { theme } = useTheme();

  const imageSrc =
    theme === ETheme.LIGHT
      ? '/images/photos/me-ai.png'
      : '/images/photos/me-ai-2.png';

  return (
    <Image
      imageSrc={imageSrc}
      alt="Avatar"
      className="h-32 w-32 rounded-full border-2 border-white object-cover md:h-40 md:w-40"
      skeletonClassName="h-32 w-32 rounded-full md:h-40 md:w-40"
      lazyLoading={false}
    />
  );
}
