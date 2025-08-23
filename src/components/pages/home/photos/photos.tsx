import { IPhoto } from './photos.types';
import { selfPhotos, mainPhoto } from './photos.const';

export function Photos() {
  const topLinePhotos = selfPhotos.slice(0, 3);
  const bottomLinePhotos = selfPhotos.slice(3, 6);

  return (
    <div className="flex flex-col items-center">
      <Photo photo={mainPhoto} />
      <div className="mb-[-1.5rem] mt-[1.5rem] flex space-x-[-1rem]">
        <Photo photo={topLinePhotos[0]} />
        <Photo photo={topLinePhotos[1]} />
        <Photo photo={topLinePhotos[2]} />
      </div>
      <div className="mb-[-1.5rem] flex space-x-[-1rem]">
        <Photo photo={bottomLinePhotos[0]} />
        <Photo photo={bottomLinePhotos[1]} />
        <Photo photo={bottomLinePhotos[2]} />
      </div>
    </div>
  );
}

function Photo({ photo }: { photo: IPhoto }) {
  return (
    <div className="group relative transition-transform hover:z-10 hover:scale-105">
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-24 w-24 rounded-full border-2 border-white object-cover"
      />
      {photo.alt && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          {photo.alt}
        </div>
      )}
    </div>
  );
}
