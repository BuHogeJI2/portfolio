import { mainPhoto } from './photos.const';

export function Avatar() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={mainPhoto.src}
        alt={mainPhoto.alt}
        className="h-32 w-32 rounded-full border-2 border-white object-cover"
      />
    </div>
  );
}
