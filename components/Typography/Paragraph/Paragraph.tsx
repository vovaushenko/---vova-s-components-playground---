import React from 'react';
import * as Styled from './Paragraph.styles';

export interface ParagraphProps {
  margin?: string;
}

/**
 *Renders re-usable paragraph with unified styles
 *@function Paragraph
 *@param {string} margin - margin to be applied
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  margin,
  children,
}): JSX.Element => {
  return <Styled.P margin={margin}>{children}</Styled.P>;
};

export default Paragraph;
