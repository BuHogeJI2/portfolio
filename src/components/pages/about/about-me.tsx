import { Container } from '@/components/base/container/container';
import { ReactElement } from 'react';
import { aboutMeKeyPoints, aboutMePhotos } from './about-me.const';

export function AboutMe(): ReactElement {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-12 py-12">
      <AboutMePhotos />
      <div className="flex flex-row gap-4">
        <AboutMeDescription />
        <AboutMeKeyPoints />
      </div>
    </div>
  );
}

function AboutMeDescription(): ReactElement {
  return (
    <div className="flex-1/2 flex flex-col gap-4">
      <p className="text-lg text-secondary-default dark:text-white">
        Greetings! I'm Dmitry, a frontend developer with over{' '}
        <span className="font-bold text-primary-default dark:text-secondary-dark">
          4 years
        </span>{' '}
        of hands-on experience in building modern, user-centric web
        applications.
      </p>
      <p className="text-lg text-secondary-default dark:text-white">
        Throughout my journey, I've developed a strong specialization in
        building{' '}
        <span className="font-bold text-primary-default dark:text-secondary-dark">
          complex frontend systems
        </span>{' '}
        for the travel industry, tackling challenges like interactive maps,
        advanced search filters, and seamless booking flows. This experience has
        equipped me with a versatile skill set that I'm eager to apply to new
        domains and innovative projects.
      </p>
      <p className="text-lg text-secondary-default dark:text-white">
        I find joy in tackling complex frontend challenges and creating
        intuitive interfaces that bring tangible value to users. My goal is to
        harness creativity and modern tools to build innovative, user-centric
        products that make a meaningful difference.
      </p>
      <p className="text-lg text-secondary-default dark:text-white">
        Let’s collaborate and bring your ideas to life!
      </p>
    </div>
  );
}

function AboutMePhotos(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {aboutMePhotos.map((photo, index) => (
        <>
          <div key={photo.src} className="h-24 w-24 rounded-lg">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          {index < aboutMePhotos.length - 1 && (
            <div className="text-lg text-secondary-default dark:text-white">
              |
            </div>
          )}
        </>
      ))}
    </div>
  );
}

function AboutMeKeyPoints(): ReactElement {
  return (
    <div className="flex flex-col gap-4">
      {aboutMeKeyPoints.map(keyPoint => (
        <div
          key={keyPoint.title}
          className="flex flex-col items-center justify-center gap-2 rounded-lg bg-primary-default p-4 text-white"
        >
          <h3 className="text-4xl font-bold">{keyPoint.title}</h3>
          <p className="text-center text-sm">{keyPoint.description}.</p>
        </div>
      ))}
    </div>
  );
}
