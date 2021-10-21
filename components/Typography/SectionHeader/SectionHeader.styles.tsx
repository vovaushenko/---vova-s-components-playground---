import styled, { css } from 'styled-components';
import { trackingInExpand } from '../../../design-foundation/reusable-animations';
import { SectionHeaderProps } from './SectionHeader';

type StyledProps = Pick<SectionHeaderProps, 'margin' | 'variant'>;

const s = css`
  font-size: 1.25rem;
`;
const m = css`
  font-size: 1.5rem;
`;
const l = css`
  font-size: 2rem;
`;
const xl = css`
  font-size: 3rem;
`;
const xxl = css`
  font-size: 4rem;
`;

export const H2 = styled.h3<StyledProps>`
  color: ${({ theme }) => theme.colors.primary.accent};
  font-size: ${({ theme }) => theme.headingFontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: -2px;
  margin: ${({ margin }) => margin};

  animation: ${trackingInExpand} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  ${({ variant }) => variant === 's' && s};
  ${({ variant }) => variant === 'm' && m};
  ${({ variant }) => variant === 'l' && l};
  ${({ variant }) => variant === 'xl' && xl};
  ${({ variant }) => variant === 'xxl' && xxl};

  @media ${({ theme }) => theme.media.phone} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
