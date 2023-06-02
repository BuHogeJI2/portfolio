import React, { PropsWithChildren } from 'react';
import { ModalWrapper } from './Modal.styled';
import ModalOverlay from './ModalOverlay';

interface IShadowOverlayProps {
  show?: boolean;
  className?: string;
}

export default function ShadowOverlay({
  children,
  className,
  show,
}: PropsWithChildren<IShadowOverlayProps>): React.ReactElement | null {
  if (!show) return null;

  return (
    <ModalOverlay className={className}>
      <ModalWrapper className="modal-wrapper">{children}</ModalWrapper>
    </ModalOverlay>
  );
}
