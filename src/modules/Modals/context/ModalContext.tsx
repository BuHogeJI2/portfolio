import React, { useLayoutEffect, useState } from 'react';

export const MODAL_ROOT_ELEMENT_ID = `modal-root`;

const ModalContext = React.createContext<HTMLElement | null>(null);

export function ModalRootComponent(): React.ReactElement {
  return <div id={MODAL_ROOT_ELEMENT_ID} />;
}

export function ModalContextProvider({ children }): React.ReactElement {
  const [modalRootEl, setModalRootEl] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (document) {
      setModalRootEl(document.getElementById(MODAL_ROOT_ELEMENT_ID));
    }
  }, []);

  return (
    <ModalContext.Provider value={modalRootEl}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
