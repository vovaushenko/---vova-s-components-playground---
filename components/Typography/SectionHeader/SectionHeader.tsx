import React from 'react';
import * as Styled from './SectionHeader.styles';

export interface SectionHeaderProps {
  margin?: string;
  variant?: 's' | 'm' | 'l' | 'xl' | 'xxl';
}

/**
 *Renders animated section header
 *@function SectionHeader
 *@param {children} ReactNode - wrapped text
 *@param {string} margin - optional margin
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
  margin,
  variant,
  children,
}): JSX.Element => {
  return (
    <Styled.H2 margin={margin} variant={variant ? variant : 'm'}>
      {children}
    </Styled.H2>
  );
};

export default SectionHeader;
