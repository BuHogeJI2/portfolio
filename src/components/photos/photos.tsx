import { selfPhotos } from './photos.const';

export function Photos() {
  const topPhoto = selfPhotos[0];
  const middlePhotos = selfPhotos.slice(1, 3);
  const bottomPhotos = selfPhotos.slice(3, 5);
  const lastPhoto = selfPhotos[5];

  return (
    <div className="flex flex-col items-center">
      {/* Top photo */}
      <div className="relative mb-[-2.5rem] transition-transform hover:z-10 hover:scale-105">
        <img
          src={topPhoto.src}
          alt={topPhoto.alt}
          className="h-24 w-24 rounded-full border-2 border-white object-cover"
        />
      </div>
      {/* Middle row with two photos */}
      <div className="mb-[-2.5rem] flex space-x-[-1rem]">
        <div className="relative transition-transform hover:z-10 hover:scale-105">
          <img
            src={middlePhotos[0].src}
            alt={middlePhotos[0].alt}
            className="h-24 w-24 rounded-full border-2 border-white object-cover"
          />
        </div>
        <div className="relative transition-transform hover:z-10 hover:scale-105">
          <img
            src={middlePhotos[1].src}
            alt={middlePhotos[1].alt}
            className="h-24 w-24 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
      {/* Bottom row with two photos */}
      <div className="mb-[-2.5rem] flex space-x-[-1rem]">
        <div className="relative transition-transform hover:z-10 hover:scale-105">
          <img
            src={bottomPhotos[0].src}
            alt={bottomPhotos[0].alt}
            className="h-24 w-24 rounded-full border-2 border-white object-cover"
          />
        </div>
        <div className="relative transition-transform hover:z-10 hover:scale-105">
          <img
            src={bottomPhotos[1].src}
            alt={bottomPhotos[1].alt}
            className="h-24 w-24 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
      {/* Last photo */}
      <div className="relative transition-transform hover:z-10 hover:scale-105">
        <img
          src={lastPhoto.src}
          alt={lastPhoto.alt}
          className="h-24 w-24 rounded-full border-2 border-white object-cover"
        />
      </div>
    </div>
  );
}
