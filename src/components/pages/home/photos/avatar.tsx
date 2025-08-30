import { mainPhoto } from './photos.const';

export function Avatar() {
  return (
    <div className="flex w-full flex-col items-center">
      <img
        src={mainPhoto.src}
        alt={mainPhoto.alt}
        className="rounded-full border-2 border-white object-cover"
      />
    </div>
  );
}
