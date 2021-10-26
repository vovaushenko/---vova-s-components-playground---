import styled, { css } from 'styled-components';
import { Props } from './NavbarSearch';
import {
  slideInBlurredTop,
  slideInTop,
  slideOutBlurredTop,
} from '../../../../design-foundation/reusable-animations';

const expandedStyles = css`
  /* make visible and apply animation */
  visibility: visible;
  opacity: 1;
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  animation: ${slideInBlurredTop} 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
`;
const closedStyles = css`
  transition: all 0.2s, opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  /* visually hidden styles go below */
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  height: 0;
  width: 0;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const unmountAnimation = css`
  /* separate animation for unmount */
  animation: ${slideOutBlurredTop} 0.2s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
`;

export const Container = styled.div<Props>`
  ${({ isExpanded }) => (isExpanded ? expandedStyles : closedStyles)};
  display: flex;
  justify-content: center;

  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.primary.text};
  background: ${({ theme }) => theme.colors.primary.background};

  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;

  ${({ isExpanded }) => !isExpanded && unmountAnimation};
`;

export const SearchModal = styled.div`
  position: absolute;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary.text};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 3rem;
  top: calc(100% + 1rem);
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  background-color: ${({ theme }) => theme.colors.primary.secondaryBg};

  animation: ${slideInTop} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  max-height: 500px;
  overflow-y: scroll;
  width: 100%;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const SearchOptionsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SearchOption = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border-radius: 2.5rem;
  transition: background 0.2s ease-in;

  & .title {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  & .description {
    color: ${({ theme }) => theme.colors.primary.accent};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary.secondaryBg};
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};

  background: ${({ theme }) => theme.colors.primary.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 2rem;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
