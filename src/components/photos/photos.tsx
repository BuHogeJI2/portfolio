import { IPhoto } from './photos.types';
import { selfPhotos } from './photos.const';

export function Photos() {
  const topPhoto = selfPhotos[0];
  const middlePhotos = selfPhotos.slice(1, 3);
  const bottomPhotos = selfPhotos.slice(3, 5);
  const lastPhoto = selfPhotos[5];

  return (
    <div className="flex flex-col items-center">
      {/* Top photo */}
      <div className="mb-[-2.5rem] flex space-x-[-1rem]">
        <Photo photo={topPhoto} />
      </div>
      {/* Middle row with two photos */}
      <div className="mb-[-2.5rem] flex space-x-[-1rem]">
        <Photo photo={middlePhotos[0]} />
        <Photo photo={middlePhotos[1]} />
      </div>
      {/* Bottom row with two photos */}
      <div className="mb-[-2.5rem] flex space-x-[-1rem]">
        <Photo photo={bottomPhotos[0]} />
        <Photo photo={bottomPhotos[1]} />
      </div>
      {/* Last photo */}
      <Photo photo={lastPhoto} />
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
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        {photo.alt}
      </div>
    </div>
  );
}
