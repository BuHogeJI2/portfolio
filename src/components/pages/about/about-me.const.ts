import { selfPhotos } from '../home/photos/photos.const';

export type TAboutMeKeyPoint = {
  title: string;
  description: string;
};

export const aboutMeKeyPoints: TAboutMeKeyPoint[] = [
  {
    title: '4+',
    description: 'Years of experience',
  },
  {
    title: '10+',
    description: 'Projects I worked on',
  },
];

export const aboutMePhotos = [selfPhotos[5], selfPhotos[1], selfPhotos[3]];
