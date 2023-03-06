import React from 'react';
import styled from 'styled-components';

const BaseImage = styled.img({});

interface IImageProps {
  src: string;
  className?: string;
  onClick?(): void;
}

export default function Image({
  src,
  onClick,
  className,
}: IImageProps): React.ReactElement {
  return <BaseImage src={src} className={className} onClick={onClick} />;
}
