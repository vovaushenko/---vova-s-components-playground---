import styled, { css, keyframes } from 'styled-components';

interface Props {
  bgImg: string;
  cardGradientColor: string;
  animationDelay: number;
  isLoading: boolean;
}

/***
 * LOADING CARD STATE
 */
const movingGradient = css`repeating-linear-gradient(60deg,
transparent,
transparent 10px,
${({ theme }) => theme.colors.yellow.golden} 10px,
${({ theme }) => theme.colors.yellow.golden} 20px)
`;
const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const loadingCartStyles = css`
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: ${({ theme }) => theme.colors.yellow.darkGolden}
      ${movingGradient};
    animation: ${loadingKeyframes} 2s infinite linear;
  }

  cursor: wait;
`;

export const hoveredCardStyles = css``;
export const activeCardStyles = css`
  transform: scale(0.99);
`;
export const cardAnimation = css`
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Container = styled.article<Props>`
  position: relative;
  display: flex;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.gray.card};
  padding: ${({ theme }) => theme.spacing.md};
  overflow: hidden;

  background: ${({
    bgImg,
    cardGradientColor,
  }) => `linear-gradient(to top, ${cardGradientColor}, transparent 100%),
    url(${bgImg}) center/cover`};
  width: 350px;
  aspect-ratio: 1/1;

  &:hover {
    ${hoveredCardStyles}
  }

  ${cardAnimation};
  animation-delay: ${({ animationDelay }) => `${animationDelay}ms`};

  &:active {
    ${activeCardStyles}
  }

  ${({ isLoading }) => isLoading && loadingCartStyles};
`;

export const Figcaption = styled.figcaption`
  p {
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

export const ExternalLink = styled.a`
  :focus-visible {
    outline: none;
    box-shadow: none;
  }

  :focus-visible::before {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.yellow.golden};
  }

  :before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const Figure = styled.figure``;
