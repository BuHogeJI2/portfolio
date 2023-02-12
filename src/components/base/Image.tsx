import React from 'react';
import styled from 'styled-components';

const BaseImage = styled.img({});

interface IImageProps {
  src: string;
  className?: string;
}

export default function Image({
  src,
  className,
}: IImageProps): React.ReactElement {
  return <BaseImage src={src} className={className} />;
}
