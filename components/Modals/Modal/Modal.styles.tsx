import styled from 'styled-components';
import { scaleInCenter } from '../../../design-foundation/reusable-animations';

interface ContainerProps {
  height: string;
  width: string;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.primary.secondaryBg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadows.base};

  width: ${({ width }) => width || '100vw'};
  height: ${({ height }) => height || '100vh'};

  animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  @media ${({ theme }) => theme.media.phone} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CloseModalButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
