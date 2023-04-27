import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, ModalOverlay, ModalContent } from './Modal.style';

const Modal = ({
  isOpen,
  onRequestClose,
  children,
  overlayClickClose = true,
}) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    setModalRoot(root);

    return () => {
      document.body.removeChild(root);
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && overlayClickClose) {
      onRequestClose();
    }
  };

  return (
    isOpen &&
    modalRoot &&
    ReactDOM.createPortal(
      <ModalWrapper>
        <ModalOverlay onClick={handleOverlayClick} />
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>,
      modalRoot
    )
  );
};

export default Modal;