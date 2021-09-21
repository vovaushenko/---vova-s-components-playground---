import React from 'react';
import { Label } from './SimpleCheckbox.styles';
import { FiCheck } from 'react-icons/fi';

export interface Props {
  variant: 'simple' | 'fade' | 'animated';
  height: number;
}

/**
 *Renders simple checkbox with several variants
 *@function SimpleCheckbox
 *@param {number} height - height of the checkbox, based on it width and size of check icon will be calculated
 *@returns {JSX.Element} - Rendered SimpleCheckbox component
 */
const SimpleCheckbox = ({ variant, height }: Props): JSX.Element => {
  const checkboxStyle = {
    '--height': `${height}px`,
    '--width': `${height}px`,
    '--check-icon-size': `${height * 0.7}px`,
  } as React.CSSProperties;

  return (
    <Label style={checkboxStyle} variant={variant}>
      <input type="checkbox" />
      <span className="checkbox">
        <FiCheck className="check-icon" />
      </span>
    </Label>
  );
};

export default SimpleCheckbox;
