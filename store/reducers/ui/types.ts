export interface UIstate {
  theme: 'dark' | 'light';
  isSettingsWidgetOpen: boolean;
  isInNightMode: boolean;
  brightness: string;
}

export enum UiActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',

  OPEN_SETTINGS_WIDGET = 'OPEN_SETTINGS_WIDGET',
  CLOSE_SETTINGS_WIDGET = 'CLOSE_SETTINGS_WIDGET',

  TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE',

  SET_BRIGHTNESS = 'SET_BRIGHTNESS',
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

export interface SetBrightnessAction {
  type: UiActionTypes.SET_BRIGHTNESS;
  payload: string;
}

export type UiAction =
  | ChangeThemeAction
  | OpenSettingsWidgetAction
  | CloseSettingsWidgetAction
  | ToggleNightModeAction
  | SetBrightnessAction;
