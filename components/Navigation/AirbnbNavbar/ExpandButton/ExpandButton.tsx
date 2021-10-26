import React from 'react';
import * as Styled from './ExpandButton.styles';
import { FiPlusCircle } from 'react-icons/fi';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
}

/**
 *@function ExpandButton
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const ExpandButton = ({ text, ...rest }: ButtonProps): JSX.Element => {
  return (
    <Styled.Container {...rest}>
      <Styled.ButtonText>{text}</Styled.ButtonText>
      <Styled.SearchIcon>
        <FiPlusCircle className="search__icon" />
      </Styled.SearchIcon>
    </Styled.Container>
  );
};

export default ExpandButton;
