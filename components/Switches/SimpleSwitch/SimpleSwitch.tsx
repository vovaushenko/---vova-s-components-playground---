import React, { useState } from 'react';
import * as Styled from './SimpleSwitch.styles';

export interface Props {
  width: number;
  borderRadius: number;
}

/**
 *@function SimpleSwitch
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SimpleSwitch = ({ width, borderRadius }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const switchStyle = {
    '--width': `${width}px`,
    '--knobSize': `${width / 2.5}px`,
    '--switch-radius': `${borderRadius}px`,
    '--half-width': `${width / 2}px`,
  } as React.CSSProperties;

  return (
    <Styled.Label style={switchStyle}>
      <Styled.Input
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
      <Styled.Switch>
        <Styled.Knob isChecked={isChecked} />
      </Styled.Switch>
    </Styled.Label>
  );
};

export default SimpleSwitch;
