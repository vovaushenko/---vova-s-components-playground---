import {
  CloseModalAction,
  IModal,
  ModalsActionTypes,
  OpenModalAction,
} from './types';

export const ModalActionCreators = {
  openModal: (modal: IModal): OpenModalAction => ({
    type: ModalsActionTypes.OPEN_MODAL,
    payload: modal,
  }),

  closeModal: (modalID: string): CloseModalAction => ({
    type: ModalsActionTypes.CLOSE_MODAL,
    payload: modalID,
  }),
};
