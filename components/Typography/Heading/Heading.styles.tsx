import styled from 'styled-components';
import { HeaderProps } from './Heading';

type H3Props = Pick<HeaderProps, 'margin'>;

export const H3 = styled.h3<H3Props>`
  margin: ${({ margin }) => margin};
  font-size: ${({ theme }) => theme.headingFontSize.h2};
  transition: color 0.2s ease-in;
`;
