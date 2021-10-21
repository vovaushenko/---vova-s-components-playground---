import styled from 'styled-components';
import { a11yOutlineHighlight } from '../../../../design-foundation/reusable-styles';

interface ContainerProps {
  isHovered: boolean;
}

export const Container = styled.article<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.border.primary};

  h3 {
    color: ${({ isHovered, theme }) =>
      isHovered ? theme.colors.primary.accent : 'inherit'};
  }
`;

export const ReadMore = styled.a`
  display: flex;
  font-size: ${({ theme }) => theme.headingFontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary.text};
  outline: 0;

  :focus-visible::after {
    ${a11yOutlineHighlight};
    border-radius: ${({ theme }) => theme.border.primary};
  }

  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xs};

  .icon {
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: ${({ theme }) => theme.textFontSize.lg};
  }
`;

export const TagList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.primary.secondaryBg};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.border.primary};
`;
