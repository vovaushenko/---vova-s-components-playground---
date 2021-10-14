import styled, { css } from 'styled-components';

interface Props {
  bgImg: string;
  cardGradientColor: string;
  isLoading: boolean;
  variant: 'simple' | 'animated';
  animationDelay?: number | never;
}

/***
 * CARD CUSTOM PROPS
 */
export const lightThemeCssProps = css`
  --cardBg: ${({ theme }) => theme.colors.gray.invisible};
  --cardTextColor: ${({ theme }) => theme.colors.white.standard};
  --skeletonItemColor: ${({ theme }) => theme.colors.white.standard};
  --loadingWaveColor: rgba(255, 255, 255, 0.5);
`;
export const darkThemeCssProps = css`
  --cardBg: ${({ theme }) => theme.colors.gray.bg};
  --cardTextColor: ${({ theme }) => theme.colors.white.standard};
  --skeletonItemColor: ${({ theme }) => theme.colors.gray.card};
  --loadingWaveColor: rgba(133, 133, 133, 0.2);
`;

/***
 * LOADING CARD STATE
 */
const loadingCartStyles = css`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: flex-start;

  background: var(--cardBg);
  cursor: wait;

  @keyframes loading {
    0% {
      transform: skewX(-10deg) translateX(-100%);
    }
    100% {
      transform: skewX(-10deg) translateX(200%);
    }
  }

  & ::before {
    content: '';
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      var(--loadingWaveColor),
      transparent
    );
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;

    animation: loading 0.7s infinite;
  }
`;

const hoveredCardStyles = css``;

const activeCardStyles = css`
  transform: scale(0.99);
`;

const cardAppearanceAnimation = css<Props>`
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
  animation-delay: ${({ animationDelay }) => `${animationDelay}ms`};
`;

export const Container = styled.article<Props>`
  ${({ theme }) =>
    theme.theme === 'dark' ? darkThemeCssProps : lightThemeCssProps};

  position: relative;
  display: flex;
  align-items: flex-end;
  color: var(--cardTextColor);
  background: var(--cardBg);
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

  &:active {
    ${activeCardStyles}
  }

  ${({ isLoading }) => isLoading && loadingCartStyles};

  ${({ variant }) => variant === 'animated' && cardAppearanceAnimation}
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

export const SkeletonImg = styled.div`
  height: 80%;
  width: 100%;
  background: var(--skeletonItemColor);
`;

export const SkeletonText = styled.span`
  width: 50%;
  height: 3rem;
  background: var(--skeletonItemColor);
`;
