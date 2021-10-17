import styled from 'styled-components';
import { slideTop } from '../../../../design-foundation/reusable-animations';

interface StyledProps {
  isOpen: boolean;
  navbarHeight: number;
}

export const Container = styled.nav<StyledProps>`
  /* z - index */
  z-index: ${({ theme }) => theme.zIndex.navigation};

  /* positioning */
  position: fixed;
  left: 0;
  right: 0;

  /* display */
  display: flex;
  align-items: center;
  justify-content: center;

  /* styling */
  padding: ${({ theme }) => theme.spacing.sm};
  height: ${({ navbarHeight }) => `${navbarHeight}rem`};
`;

export const RoutingModal = styled.aside<StyledProps>`
  /* positioning */
  position: fixed;
  top: ${({ navbarHeight }) => `${navbarHeight}rem`};
  /* display */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  /* dimensions */
  width: 100%;
  height: ${({ navbarHeight }) => `calc(100vh - ${navbarHeight}rem)`};
  /* styling */
  padding: ${({ theme }) => theme.spacing.xl};
  background-image: ${({ theme }) => theme.gradients.lightGrayGradient};
  transition: transform 0.5s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? `translateY(0)` : `translateY(1000px)`};
`;

export const RouterLinks = styled.ul`
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  /* animation */
  animation: ${slideTop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.6s;
`;

export const SocialLinks = styled.ul`
  /* display */
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  & .button__icon {
    font-size: 2rem;
  }

  /* animation */
  animation: ${slideTop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.9s;
`;
