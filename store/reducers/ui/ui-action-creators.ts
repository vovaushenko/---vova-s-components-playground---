import {
  CloseSettingsWidgetAction,
  IAppTheme,
  OpenSettingsWidgetAction,
  SetBrightnessAction,
  SetThemeAction,
  ToggleNightModeAction,
  UiActionTypes,
} from './types';
import { AppState, NextThunkDispatch } from '../../index';
import { persistThemeToLocalStorage } from '../../../utils';

export const UiActionCreators = {
  setTheme: (theme: IAppTheme): SetThemeAction => ({
    type: UiActionTypes.SET_THEME,
    payload: theme,
  }),

  changeTheme:
    () => (dispatch: NextThunkDispatch, getState: () => AppState) => {
      dispatch({ type: UiActionTypes.CHANGE_THEME });
      const currentThemeMode = getState().ui.theme;
      persistThemeToLocalStorage(currentThemeMode);
    },

  openSettingsWidget: (): OpenSettingsWidgetAction => ({
    type: UiActionTypes.OPEN_SETTINGS_WIDGET,
  }),

  closeSettingsWidget: (): CloseSettingsWidgetAction => ({
    type: UiActionTypes.CLOSE_SETTINGS_WIDGET,
  }),

  toggleNightMode: (): ToggleNightModeAction => ({
    type: UiActionTypes.TOGGLE_NIGHT_MODE,
  }),

  setScreenBrightness: (brightness: string): SetBrightnessAction => ({
    type: UiActionTypes.SET_BRIGHTNESS,
    payload: brightness,
  }),
};
