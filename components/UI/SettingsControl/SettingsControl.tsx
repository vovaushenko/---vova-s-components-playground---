import React from 'react';
import * as Styled from './SettingsControl.styles';
import { useSettingsControlConfig } from './SettingsControl.config';
import Boop from '../../Animations/Boop/Boop';
import IconButton from '../../Buttons/IconButton/IconButton';

/**
 *@function SettingsControl
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SettingsControl = (): JSX.Element => {
  const { settingButtons } = useSettingsControlConfig();

  return (
    <Styled.Container>
      <Styled.UL>
        {settingButtons.map((btn) => (
          <Styled.LI key={btn.id}>
            <IconButton onClick={btn.action} renderAs={'button'}>
              <Boop boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}>
                {btn.icon}
              </Boop>
            </IconButton>
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default SettingsControl;
