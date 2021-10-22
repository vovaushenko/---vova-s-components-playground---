import React from 'react';
import * as Styled from './OpenModalsContainer.styles';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Modal from '../Modal/Modal';
import { useActions } from '../../../hooks/useActions';

/**
 *Renders container that contains all currently open modals
 *@function OpenModalsContainer
 *@returns {JSX.Element} - Rendered OpenModalsContainer component
 */
const OpenModalsContainer = (): JSX.Element | null => {
  const { openModals } = useTypedSelector((state) => state.modals);
  const { closeModal } = useActions();

  if (!openModals.length) return null;

  return (
    <Styled.Container>
      <Styled.ModalWrapper>
        {openModals.map((modal) => (
          <Modal key={modal.id} modal={modal} closeModal={closeModal} />
        ))}
      </Styled.ModalWrapper>
    </Styled.Container>
  );
};
export default OpenModalsContainer;
