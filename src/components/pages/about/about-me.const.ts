import { selfPhotos } from '@/components/pages/home/photos/photos.const';

export type TAboutMeKeyPoint = {
  title: string;
  description: string;
};

export const year_of_beginning = 2020;
export const experience = new Date().getFullYear() - year_of_beginning;

export const aboutMeKeyPoints: TAboutMeKeyPoint[] = [
  {
    title: `${experience}+`,
    description: 'Years of experience',
  },
  {
    title: '10+',
    description: 'Projects I worked on',
  },
];

export const aboutMePhotos = [...selfPhotos];
