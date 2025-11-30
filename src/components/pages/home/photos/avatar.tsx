import { useTheme } from '@/contexts/theme-context';
import { ETheme } from '@/components/base/navbar/navbar.types';

export function Avatar() {
  const { theme } = useTheme();

  const imageSrc =
    theme === ETheme.LIGHT
      ? '/images/photos/me-ai-2.png'
      : '/images/photos/me-ai.png';

  return (
    <div className="flex w-full flex-col items-center">
      <img
        src={imageSrc}
        alt="Avatar"
        className="rounded-full border-2 border-white object-cover"
      />
    </div>
  );
}
