import { ModalAction, ModalsActionTypes, ModalsState } from './types';

const initialModalState: ModalsState = {
  openModals: [],
};

/**
 *@function modalsReducer
 *@param {ModalsState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

const modalsReducer = (
  state = initialModalState,
  action: ModalAction
): ModalsState => {
  switch (action.type) {
    case ModalsActionTypes.OPEN_MODAL:
      const isModalAlreadyOpen = state.openModals.some(
        (modal) => modal.id === action.payload.id
      );
      if (isModalAlreadyOpen) return { ...state };

      return {
        ...state,
        openModals: [...state.openModals, action.payload],
      };

    case ModalsActionTypes.CLOSE_MODAL:
      const modalsWithoutClosed = state.openModals.filter(
        (modal) => modal.id !== action.payload
      );
      return { ...state, openModals: modalsWithoutClosed };

    default:
      return state;
  }
};

export default modalsReducer;
