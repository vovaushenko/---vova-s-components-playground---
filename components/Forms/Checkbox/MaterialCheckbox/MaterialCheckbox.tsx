import React from 'react';
import * as Styled from './MaterialCheckbox.styles';

export interface Props {
  height: number;
}

/**
 *@function MaterialCheckbox
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered MaterialCheckbox component
 */
const MaterialCheckbox = ({ height }: Props): JSX.Element => {
  const checkboxStyle = {
    '--height': `${height}px`,
    '--width': `${height}px`,
  } as React.CSSProperties;

  return (
    <Styled.Label style={checkboxStyle}>
      <input type="checkbox" />
      <span className="checkbox" />
    </Styled.Label>
  );
};

export default MaterialCheckbox;
