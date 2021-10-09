export interface UIstate {
  theme: 'dark' | 'light';
  areSettingsOpen: boolean;
}

export enum UIactionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
  THEME_WAS_CHANGED = 'THEME_WAS_CHANGED',

  OPEN_SETTINGS_MODAL = 'OPEN_SETTINGS_MODAL',
  CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL',
}

export type UIaction =
  | { type: UIactionTypes.CHANGE_THEME }
  | { type: UIactionTypes.THEME_WAS_CHANGED }
  | { type: UIactionTypes.OPEN_SETTINGS_MODAL }
  | { type: UIactionTypes.CLOSE_SETTINGS_MODAL };
