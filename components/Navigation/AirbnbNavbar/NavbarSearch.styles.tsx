import styled, { css } from 'styled-components';
import { Props } from './NavbarSearch';

const expandedStyles = css`
  visibility: visible;
  opacity: 1;
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  /**
 * ----------------------------------------
 * animation slide-in-blurred-top
 * ----------------------------------------
 */
  @keyframes slide-in-blurred-top {
    0% {
      transform: translateY(-300px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;
const closedStyles = css`
  visibility: hidden;
  transition: all 0.2s, opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;

  overflow: hidden;
  height: 0px;
  width: 0px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const unmountAnimation = css`
  /**
 * ----------------------------------------
 * animation slide-out-blurred-top
 * ----------------------------------------
 */
  @keyframes slide-out-blurred-top {
    0% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 0%;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-250px) scaleY(0.1) scaleX(0.1);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
  }
  animation: slide-out-blurred-top 0.2s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
`;

export const Container = styled.div<Props>`
  ${({ isExpanded }) => (isExpanded ? expandedStyles : closedStyles)};
  display: flex;
  alignself: center;
  justify-content: center;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.white.standard};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  padding: ${({ theme }) => theme.spacing.md};

  width: 60%;
  margin: 0 auto;
  margin-top: 1rem;

  ${({ isExpanded }) => isExpanded === false && unmountAnimation};
`;
