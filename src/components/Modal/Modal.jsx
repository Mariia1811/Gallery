import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalEl } from './Modal.styled';

function Modal({ largeImage, descr, onCloseModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  });
  function handleEscClose(e) {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  }
  function handleBackdropClose(e) {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }

  return createPortal(
    <Overlay onClick={handleBackdropClose}>
      <ModalEl>
        <img src={largeImage} alt={descr} />
      </ModalEl>
    </Overlay>,
    document.querySelector('#modal-root')
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
