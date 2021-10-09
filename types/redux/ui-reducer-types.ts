export interface UIstate {
  theme: 'dark' | 'light';
  isSettingsWidgetOpen: boolean;
}

export enum UIactionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
  THEME_WAS_CHANGED = 'THEME_WAS_CHANGED',

  OPEN_SETTINGS_WIDGET = 'OPEN_SETTINGS_WIDGET',
  CLOSE_SETTINGS_WIDGET = 'CLOSE_SETTINGS_WIDGET',
}

export type UIaction =
  | { type: UIactionTypes.CHANGE_THEME }
  | { type: UIactionTypes.THEME_WAS_CHANGED }
  | { type: UIactionTypes.OPEN_SETTINGS_WIDGET }
  | { type: UIactionTypes.CLOSE_SETTINGS_WIDGET };
