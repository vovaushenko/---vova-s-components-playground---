import styled, { css } from 'styled-components';
import { floatKeyframes } from '../../../../design-foundation/reusable-animations';

interface ContainerProps {
  isHovered: boolean;
  withDescription: boolean;
}

export const TextColumn = styled.div`
  flex: 0.6;
`;

export const LinksColumn = styled.aside`
  flex: 0.05;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ComponentColumn = styled.div`
  flex: 0.35;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const withDescriptionStyle = css`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
`;

const withoutDescriptionStyle = css`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};

  ${TextColumn} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.article<ContainerProps>`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ withDescription }) =>
    withDescription ? withDescriptionStyle : withoutDescriptionStyle};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary.background};

  border-radius: ${({ theme }) => theme.border.primary};

  h3 {
    color: ${({ isHovered, theme }) =>
      isHovered ? theme.colors.primary.accent : 'inherit'};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing.md};
    ${TextColumn} {
      flex: 0.95;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        display: none;
      }
    }

    ${ComponentColumn} {
      display: none;
    }
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const WithLevitation = styled.div`
  animation: ${floatKeyframes} 5s ease-in-out infinite;
`;
