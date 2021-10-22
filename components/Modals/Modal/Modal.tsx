import React, { useCallback, useRef } from 'react';
import * as Styled from './Modal.styles';
import { IModal } from '../../../store/reducers/modals/types';
import { useCloseModalIfClickedOutside } from '../../../hooks/useCloseIfClickedOutside';
import IconButton from '../../Buttons/IconButton/IconButton';
import { FiXCircle } from 'react-icons/fi';
import Boop from '../../Animations/Boop/Boop';

interface ModalProps {
  modal: IModal;
  closeModal: (modalID: string) => void;
}

/**
 *Renders modal component that is used in the app
 *@function Modal
 *@param {IModal} modal - modal params to be used to render modal (modal content - wrapped modal content, height - modal height, width - modal width)
 *@returns {JSX.Element} - Rendered Modal component
 */
const Modal = ({ modal, closeModal }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = useCallback(() => {
    closeModal(modal.id);
  }, [closeModal, modal.id]);

  useCloseModalIfClickedOutside({
    modalRef,
    closeModalFunction: handleCloseModal,
    isModalOpen: true,
  });

  return (
    <Styled.Container ref={modalRef} height={modal.height} width={modal.width}>
      <Styled.CloseModalButton>
        <Boop boopConfig={{ scale: 1.2 }}>
          <IconButton renderAs={'button'} onClick={handleCloseModal}>
            <FiXCircle className={'button__icon'} />
          </IconButton>
        </Boop>
      </Styled.CloseModalButton>

      {modal.content}
    </Styled.Container>
  );
};

export default Modal;
