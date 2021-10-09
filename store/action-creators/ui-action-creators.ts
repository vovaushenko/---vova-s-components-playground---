import { Dispatch } from 'redux';
import { UIaction, UIactionTypes } from '../../types/redux/ui-reducer-types';
import { State } from '../reducers';

/**
 *@EXPORT
 *This module exports redux ui action creators and thunks for ui-reducer
 */

export { changeTheme, openSettingsWidget, closeSettingsWidget };

/**
 *@UI async action creator, will dispatch action to change color theme and persist this change to localStorage
 *@function changeTheme
 *@returns {function} - Redux thunk function
 */
const changeTheme = () => {
  return async (
    dispatch: Dispatch<UIaction>,
    getState: () => State
  ): Promise<void> => {
    dispatch({ type: UIactionTypes.CHANGE_THEME });

    localStorage.setItem('theme', getState().ui.theme);

    dispatch({ type: UIactionTypes.THEME_WAS_CHANGED });
  };
};

/**
 *@UI async action creator, will dispatch action to open settings widget, thereby showing it in viewport
 *@function openSettingsWidget
 *@returns {function} - Redux thunk function
 */

const openSettingsWidget = (): UIaction => ({
  type: UIactionTypes.OPEN_SETTINGS_WIDGET,
});
/**
 *@UI async action creator, will dispatch action to close settings widget, thereby hiding it from viewport
 *@function openSettingsWidget
 *@returns {function} - Redux thunk function
 */

const closeSettingsWidget = (): UIaction => ({
  type: UIactionTypes.CLOSE_SETTINGS_WIDGET,
});
