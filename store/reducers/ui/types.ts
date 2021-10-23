export interface UIstate {
  theme: 'dark' | 'light';
  isSettingsWidgetOpen: boolean;
  isInNightMode: boolean;
}

export enum UiActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',

  OPEN_SETTINGS_WIDGET = 'OPEN_SETTINGS_WIDGET',
  CLOSE_SETTINGS_WIDGET = 'CLOSE_SETTINGS_WIDGET',

  TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE',
}

export interface ChangeThemeAction {
  type: UiActionTypes.CHANGE_THEME;
}

export interface OpenSettingsWidgetAction {
  type: UiActionTypes.OPEN_SETTINGS_WIDGET;
}

export interface CloseSettingsWidgetAction {
  type: UiActionTypes.CLOSE_SETTINGS_WIDGET;
}

export interface ToggleNightModeAction {
  type: UiActionTypes.TOGGLE_NIGHT_MODE;
}

export type UiAction =
  | ChangeThemeAction
  | OpenSettingsWidgetAction
  | CloseSettingsWidgetAction
  | ToggleNightModeAction;
