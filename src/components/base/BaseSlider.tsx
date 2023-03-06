import React, { PropsWithChildren } from 'react';
import Slider, { Settings as SliderConfig } from 'react-slick';
import styled from 'styled-components';

interface IBaseSliderProps {
  config?: SliderConfig;
}

const defaultSliderConfig: SliderConfig = {
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  draggable: true,
  autoplaySpeed: 10 * 1000,
  speed: 1000,
  slidesToScroll: 1,
  slidesToShow: 1,
};

export default function BaseSlider({
  config = defaultSliderConfig,
  children,
}: PropsWithChildren<IBaseSliderProps>): React.ReactElement {
  return <Slider {...config}>{children}</Slider>;
}
