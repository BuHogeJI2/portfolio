import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import useModalContext from '../hooks/useModalContext';
import { ModalOverlayWrapper } from './Modal.styled';

export default function ModalOverlay({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const modalRootEl = useModalContext();

  return modalRootEl
    ? ReactDOM.createPortal(
        <ModalOverlayWrapper className={`modal-overlay ${className}`}>
          {children}
        </ModalOverlayWrapper>,
        modalRootEl
      )
    : null;
}
