import styled, { css } from 'styled-components';

export const Container = styled.article`
  position: relative;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Header = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  & .button__icon {
    color: ${({ theme }) => theme.colors.white.standard};
    fill: rgba(34, 34, 34, 0.3);
  }
`;

export const Badge = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  background-color: ${({ theme }) => theme.colors.white.standard};
  color: ${({ theme }) => theme.colors.gray.dark};
  padding: 0.25rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.textFontSize.sm};
`;

const swipeButtonStyles = css`
  /* RESET */
  all: unset;
  /* POSITION */
  position: absolute;
  top: 50%;
  /* DISPLAY */
  display: flex;
  align-items: center;
  justify-content: center;
  /* STYLING */
  padding: ${({ theme }) => theme.spacing.xxs};
  color: ${({ theme }) => theme.colors.gray.dark};
  cursor: pointer;
  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: ${({ theme }) => theme.boxShadows.base};

  transition: opacity 0.2s ease-in;

  & .chevron__icon {
    font-size: 1rem;
  }
`;

const visibleStyles = css`
  opacity: 1;
  pointer-events: auto;
`;
const hiddenStyles = css`
  opacity: 0;
  pointer-events: none;
`;

interface SwipeControlProps {
  isOnScreen: boolean;
}

export const SwipeBack = styled.button<SwipeControlProps>`
  ${swipeButtonStyles};
  left: 1rem;

  ${({ isOnScreen }) => (isOnScreen ? visibleStyles : hiddenStyles)};
`;

export const SwipeForward = styled.button<SwipeControlProps>`
  ${swipeButtonStyles};
  right: 1rem;

  ${({ isOnScreen }) => (isOnScreen ? visibleStyles : hiddenStyles)};
`;

export const AnimatedImage = styled.figure`
  animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-right {
    0% {
      transform: translateX(250px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
