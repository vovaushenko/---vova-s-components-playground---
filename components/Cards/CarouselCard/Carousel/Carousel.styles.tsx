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

export const SwipeLeft = styled.div<SwipeControlProps>`
  position: absolute;
  top: 50%;
  left: 1rem;
  transition: opacity 0.2s ease-in;
  ${({ isOnScreen }) => (isOnScreen ? visibleStyles : hiddenStyles)};
`;
export const SwipeRight = styled.div<SwipeControlProps>`
  position: absolute;
  top: 50%;
  transition: opacity 0.2s ease-in;
  right: 1rem;
  ${({ isOnScreen }) => (isOnScreen ? visibleStyles : hiddenStyles)};
`;

export const SwipeButton = styled.button`
  /* RESET */
  all: unset;

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

  & .chevron__icon {
    font-size: 1rem;
  }
`;

const swipeLeftAnimation = css`
  animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-right {
    0% {
      transform: translateX(250px);
      filter: blur(10px);
    }
    100% {
      transform: translateX(0);
      filter: blur(0);
    }
  }
`;
const swipeRightAnimation = css`
  @keyframes slide-in-left {
    0% {
      transform: translateX(-250px);
      filter: blur(10px);
    }
    100% {
      transform: translateX(0);
      filter: blur(0);
    }
  }

  animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

interface Props {
  swipeDirection: 'left' | 'right' | null;
}

export const AnimatedImage = styled.figure<Props>`
  ${({ swipeDirection }) => swipeDirection === 'right' && swipeRightAnimation};
  ${({ swipeDirection }) => swipeDirection === 'left' && swipeLeftAnimation};
`;
