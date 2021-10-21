import React from 'react';
import * as Styled from './Heading.styles';
import { ParagraphProps } from '../Paragraph/Paragraph';

export interface HeaderProps {
  margin?: string;
}

/**
 *Renders re-usable text-header with unified styles
 *@function Heading
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Heading: React.FunctionComponent<ParagraphProps> = ({
  margin,
  children,
}): JSX.Element => {
  return <Styled.H3 margin={margin}>{children}</Styled.H3>;
};

export default Heading;
