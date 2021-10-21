import styled from 'styled-components';
import { a11yOutlineHighlight } from '../../../../design-foundation/reusable-styles';
import { floatKeyframes } from '../../../../design-foundation/reusable-animations';

interface ContainerProps {
  isHovered: boolean;
}

export const Container = styled.article<ContainerProps>`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary.background};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.border.primary};

  h3 {
    color: ${({ isHovered, theme }) =>
      isHovered ? theme.colors.primary.accent : 'inherit'};
  }
`;

export const LinksColumn = styled.aside`
  flex: 0.05;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TextColumn = styled.div`
  flex: 0.4;
`;
export const ComponentColumn = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const WithLevitation = styled.div`
  animation: ${floatKeyframes} 5s ease-in-out infinite;
`;

export const A = styled.a`
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
