import styled, { css, keyframes } from 'styled-components';
import { Props } from './GenericButton';

const defaultButton = css`
  background: ${({ theme }) => theme.colors.primary.accentDark};
`;

const hoveredButton = css`
  opacity: 0.95;
`;

const focusedButton = css`
  // box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.accent};
`;

const disabledButton = css`
  background: ${({ theme }) => theme.colors.gray.dark};
  cursor: not-allowed;
`;

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const loadingButton = css`
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary.accent}
      repeating-linear-gradient(
        60deg,
        transparent,
        transparent 10px,
        #01bf71 10px,
        #01bf71 20px
      );
    animation: ${loadingKeyframes} 1s infinite linear;
  }

  & > span {
    opacity: 0.5;
  }

  cursor: wait;
`;

const completedButton = css`
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.green.success};
  cursor: default;
`;

export const StyledButton = styled.button<Props>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 2rem;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  background: transparent;
  border: 0;
  border-radius: ${({ theme }) => theme.border.base};
  color: ${({ theme }) => theme.colors.primary.text};
  cursor: pointer;
  outline: none;

  transition: 0.3s all ease;

  ${(p) => !p.isLoading && defaultButton};

  &:hover {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton};
  }

  &:focus {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && focusedButton};
  }

  &:disabled {
    ${disabledButton};
  }

  ${(p) => p.isLoading && loadingButton};
  ${(p) => p.isCompleted && completedButton};

  :active {
    transform: scale(0.95);
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.75rem;
  }
`;
