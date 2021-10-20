import {
  ChangeThemeAction,
  CloseSettingsWidgetAction,
  OpenSettingsWidgetAction,
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
};
