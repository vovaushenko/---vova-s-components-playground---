import styled from 'styled-components';
import { floatKeyframes } from '../../../design-foundation/reusable-animations';

export const Container = styled.section``;

export const ButtonStates = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  & p {
    writing-mode: vertical-rl;
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

export const State = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Main = styled.main`
  height: calc(80vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  background-color: ${({ theme }) => theme.colors.primary.secondaryBg};
`;

export const LevitatingWrapper = styled.div`
  animation: ${floatKeyframes} 5s ease-in-out infinite;
`;
