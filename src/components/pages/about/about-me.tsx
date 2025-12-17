import { ReactElement } from 'react';
import { aboutMeKeyPoints, aboutMePhotos, experience } from './about-me.const';
import {
  aboutMeContainerStyles,
  aboutMeContentStyles,
  aboutMeDescriptionStyles,
  aboutMeTextStyles,
  aboutMeHighlightStyles,
  aboutMePhotosContainerStyles,
  aboutMeKeyPointsContainerStyles,
  aboutMeKeyPointStyles,
  aboutMeKeyPointTitleStyles,
  aboutMeKeyPointDescriptionStyles,
} from './about-me.styles';
import { InfiniteMovingImages } from '@/components/base/infinite-moving-cards/infinite-moving-cards';

export function AboutMe(): ReactElement {
  return (
    <div className={aboutMeContainerStyles}>
      <div className={aboutMeContentStyles}>
        <AboutMeDescription />
        <AboutMeKeyPoints />
      </div>
      {/* <AboutMePhotos /> todo: adjust photos layout; add relevant photos */}
    </div>
  );
}

function AboutMeDescription(): ReactElement {
  return (
    <div className={aboutMeDescriptionStyles}>
      <p className={aboutMeTextStyles}>
        Greetings! I'm Dmitry, a frontend developer with{' '}
        <span className={aboutMeHighlightStyles}>{experience}+ years</span> of
        hands-on experience in building modern, user-centric web applications.
      </p>
      <p className={aboutMeTextStyles}>
        Throughout my journey, I've developed a strong specialization in
        building{' '}
        <span className={aboutMeHighlightStyles}>complex frontend systems</span>{' '}
        for the travel industry, tackling challenges like interactive maps,
        advanced search filters, and seamless booking flows. This experience has
        equipped me with a versatile skill set that I'm eager to apply to new
        domains and innovative projects.
      </p>
      <p className={aboutMeTextStyles}>
        I find joy in tackling complex frontend challenges and creating
        intuitive interfaces that bring tangible value to users. My goal is to
        harness creativity and modern tools to build innovative, user-centric
        products that make a meaningful difference.
      </p>
      <p className={aboutMeTextStyles}>
        Let's collaborate and bring your ideas to life!
      </p>
    </div>
  );
}

function AboutMePhotos(): ReactElement {
  return (
    <div className={aboutMePhotosContainerStyles}>
      <InfiniteMovingImages
        items={aboutMePhotos}
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}

function AboutMeKeyPoints(): ReactElement {
  return (
    <div className={aboutMeKeyPointsContainerStyles}>
      {aboutMeKeyPoints.map(keyPoint => (
        <div key={keyPoint.title} className={aboutMeKeyPointStyles}>
          <h3 className={aboutMeKeyPointTitleStyles}>{keyPoint.title}</h3>
          <p className={aboutMeKeyPointDescriptionStyles}>
            {keyPoint.description}.
          </p>
        </div>
      ))}
    </div>
  );
}
