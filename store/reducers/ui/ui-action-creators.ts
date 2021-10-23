import {
  ChangeThemeAction,
  CloseSettingsWidgetAction,
  OpenSettingsWidgetAction,
  ToggleNightModeAction,
  UiActionTypes,
} from './types';

export const UiActionCreators = {
  changeTheme: (): ChangeThemeAction => ({ type: UiActionTypes.CHANGE_THEME }),

  openSettingsWidget: (): OpenSettingsWidgetAction => ({
    type: UiActionTypes.OPEN_SETTINGS_WIDGET,
  }),

  closeSettingsWidget: (): CloseSettingsWidgetAction => ({
    type: UiActionTypes.CLOSE_SETTINGS_WIDGET,
  }),

  toggleNightMode: (): ToggleNightModeAction => ({
    type: UiActionTypes.TOGGLE_NIGHT_MODE,
  }),
};
