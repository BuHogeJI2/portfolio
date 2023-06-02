import React, { PropsWithChildren } from 'react';
import { ModalBody, ModalHeader } from './Modal.styled';
import ShadowOverlay from './ShadowOverlay';

interface IModalProps {
  show?: boolean;
  title?: string | null;
  text?: string | null;
  onClose?(): void;
  className?: string;
}

export default function CommonModal({
  show,
  title,
  text,
  onClose,
  className,
}: PropsWithChildren<IModalProps>): React.ReactElement | null {
  return (
    <ShadowOverlay show={show} className={className}>
      {title ? (
        <ModalHeader className="modal-header">
          <div className="modal-title">{title}</div>
          <div className="modal-close" onClick={onClose}>
            X
          </div>
        </ModalHeader>
      ) : null}
      {text ? <ModalBody className="modal-body">{text}</ModalBody> : null}
    </ShadowOverlay>
  );
}
