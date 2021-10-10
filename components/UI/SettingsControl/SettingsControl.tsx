import React from 'react';
import * as Styled from './SettingsControl.styles';
import { useSettingsControlConfig } from './SettingsControl.config';
import Boop from '../../Animations/Boop/Boop';

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
            <Styled.SettingsButton onClick={btn.action}>
              <Boop boopConfig={{ rotation: 13, y: -1, scale: 1.3 }}>
                {btn.icon}
              </Boop>
            </Styled.SettingsButton>
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default SettingsControl;
