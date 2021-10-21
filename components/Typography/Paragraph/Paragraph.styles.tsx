import styled from 'styled-components';
import { ParagraphProps } from './Paragraph';

type StyledProps = Pick<ParagraphProps, 'margin'>;

export const P = styled.p<StyledProps>`
  margin: ${({ margin }) => margin};
  line-height: 1.7;
`;
