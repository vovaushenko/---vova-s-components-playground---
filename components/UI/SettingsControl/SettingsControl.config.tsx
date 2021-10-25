import { ReactNode } from 'react';
import { FiMoon, FiSave, FiSettings, FiSun } from 'react-icons/fi';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface SettingControlButton {
  id: number;
  text: string;
  action: () => void;
  icon: ReactNode;
}

interface HookReturn {
  settingButtons: SettingControlButton[];
}

export const useSettingsControlConfig = (): HookReturn => {
  const { openSettingsWidget, closeSettingsWidget, changeTheme } = useActions();
  const { isSettingsWidgetOpen, theme } = useTypedSelector((state) => state.ui);

  const toggleSettingsWidget = () => {
    isSettingsWidgetOpen ? closeSettingsWidget() : openSettingsWidget();
  };

  const settingButtons: SettingControlButton[] = [
    {
      id: 1,
      action: () => toggleSettingsWidget(),
      icon: <FiSettings className={'button__icon'} />,
      text: 'Settings',
    },
    {
      id: 2,
      action: () => changeTheme(),
      icon:
        theme === 'dark' ? (
          <FiSun className={'button__icon'} />
        ) : (
          <FiMoon className={'button__icon'} />
        ),
      text: 'Settings',
    },
    {
      id: 3,
      action: () => console.log('click'),
      icon: <FiSave className={'button__icon'} />,
      text: 'Settings',
    },
  ];

  return { settingButtons };
};
