import {
  UIaction,
  UIactionTypes,
  UIstate,
} from '../../types/redux/ui-reducer-types';

const initialUIstate: UIstate = {
  theme: 'dark',
  areSettingsOpen: false,
};
/**
 *@function uiReducer
 *@param {UIstate} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */

export const uiReducer = (
  state = initialUIstate,
  action: UIaction
): UIstate => {
  switch (action.type) {
    case UIactionTypes.CHANGE_THEME:
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newTheme };

    case UIactionTypes.OPEN_SETTINGS_MODAL:
      return {
        ...state,
        areSettingsOpen: true,
      };

    case UIactionTypes.CLOSE_SETTINGS_MODAL:
      return { ...state, areSettingsOpen: false };

    default:
      return state;
  }
};
