import styled, { css } from 'styled-components';
import {
  slideInBottom,
  slidOutBottom,
} from '../../../design-foundation/reusable-animations';

const customProperties = css`
  @custom-media --motionOK(prefers-reduced-motion: no-preference);

  --theme: ${({ theme }) => theme.colors.yellow.golden};
  --radius: ${({ theme }) => theme.border.base};
  --theme-border: hsl(220 50% 75%);
  --theme-hover: ${({ theme }) => theme.colors.yellow.darkGolden};
  --border: 1px solid var(--theme-border);
  --theme-active: ${({ theme }) => theme.colors.blue.neon};
  --theme-text: ${({ theme }) => theme.colors.primary.text};

  --popupWidth: 10rem;
  --popupbg: ${({ theme }) =>
    theme.theme === 'dark'
      ? theme.colors.gray.bg
      : theme.colors.white.standard};

  --in-speed: 50ms;
  --out-speed: 300ms;
`;

export const Container = styled.div`
  ${customProperties};

  display: inline-flex;
  border-radius: var(--radius);
  background: var(--theme);
  color: var(--theme-text);
  fill: var(--theme-text);

  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const Btn = styled.button`
  /* RESET BASE STYLES */
  cursor: pointer;
  appearance: none;
  background: none;
  border: none;
  /* DISPLAY */
  display: inline-flex;
  align-items: center;
  gap: 1ch;
  white-space: nowrap;
  /* FONT */
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  /* PADDING */
  padding-block: 1.25ch;
  padding-inline: 2.5ch;
  /* COLOR */
  color: var(--theme-text);
  outline-color: var(--theme-text);
  outline-offset: -5px;

  /* BORDER */
  border-end-start-radius: var(--radius);
  border-start-start-radius: var(--radius);

  /* HOVER AND FOCUS */

  &:is(:hover, :focus-visible) {
    background: ${({ theme }) => theme.colors.yellow.darkGolden};

    & .chevron__icon {
      stroke: currentColor;
      fill: none;
    }
  }

  /* ACTIVE */

  &:active {
    background: ${({ theme }) => theme.colors.yellow.darkGolden};
  }
`;

interface PopupProps {
  isPopupExpanded: boolean;
}

const closedPopupStyles = css`
  --translateY: 0.5rem;
  opacity: 0;
  pointer-events: none;
  /* animation is controlled through --translateY custom prop */
  animation: ${slidOutBottom} 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;
const openPopupStyles = css`
  --translateY: 0.5rem;
  opacity: 1;
  pointer-events: auto;
  /* animation is controlled through --translateY custom prop */
  animation: ${slideInBottom} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Popup = styled.ul<PopupProps>`
  ${({ isPopupExpanded }) =>
    isPopupExpanded ? openPopupStyles : closedPopupStyles};

  /* POSITION */
  position: absolute;
  bottom: 80%;
  left: -1.5ch;

  width: var(--popupWidth);

  list-style-type: none;
  background: var(--popupbg);
  color: var(--theme-text);
  padding: ${({ theme }) => theme.spacing.xxxs};
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  box-shadow: ${({ theme }) => theme.boxShadows.base};

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity var(--out-speed) ease, transform var(--out-speed) ease;
    transform: translateY(5px);
  }
`;

export const popupExpandedControlStyles = css`
  & > .chevron__icon {
    transition-duration: var(--in-speed);
    transform: rotateZ(0.5turn);
  }
`;

export const PopupControl = styled.span<PopupProps>`
  inline-size: 4ch;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-inline-start: 1px solid var(--theme-text);
  border-start-end-radius: var(--radius);
  border-end-end-radius: var(--radius);

  &:is(:hover, :focus-within) {
    background: var(--theme-hover);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: var(--theme-active);
  }

  ${({ isPopupExpanded }) => isPopupExpanded && popupExpandedControlStyles};
`;

export const PopupButton = styled.button`
  /* RESET BASE STYLES */
  cursor: pointer;
  appearance: none;
  background: none;
  border: none;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xxxs};
  color: ${({ theme }) => theme.colors.primary.text};
  outline-color: var(--theme-text);
  outline-offset: -1px;

  &:is(:hover, :focus-within) {
    background: var(--theme-hover);
  }

  &:active {
    background: var(--theme-active);
  }
`;
