import React from 'react';
import * as Styled from './SettingsControl.styles';
import { useSettingsControlConfig } from './SettingsControl.config';

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
              {btn.icon}
            </Styled.SettingsButton>
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default SettingsControl;
