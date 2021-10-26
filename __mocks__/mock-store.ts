import { AppState } from '../store';

export const mockStore: AppState = {
  ui: {
    theme: 'dark',
    brightness: '100',
    isInNightMode: false,
    isSettingsWidgetOpen: false,
  },
  modals: {
    openModals: [],
  },
  articles: {
    devToArticles: [],
    error: null,
    isLoading: false,
  },
};
