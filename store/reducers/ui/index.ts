import { UiAction, UiActionTypes, UIstate } from './types';

const initialUiState: UIstate = {
  theme: 'dark',
  isSettingsWidgetOpen: false,
};
/**
 *@function index
 *@param {UiState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */
const uiReducer = (state = initialUiState, action: UiAction): UIstate => {
  switch (action.type) {
    case UiActionTypes.CHANGE_THEME:
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newTheme };

    case UiActionTypes.OPEN_SETTINGS_WIDGET:
      return {
        ...state,
        isSettingsWidgetOpen: true,
      };

    case UiActionTypes.CLOSE_SETTINGS_WIDGET:
      return { ...state, isSettingsWidgetOpen: false };

    default:
      return state;
  }
};

export default uiReducer;
