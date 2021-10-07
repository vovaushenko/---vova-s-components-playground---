import styled, { css } from 'styled-components';

interface Props {
  isActive: boolean;
}

const activeButtonStyles = css`
  background-color: var(--bgColor);

  .button__icon {
    transform: translateX(-25px);
  }

  .hidden__text {
    visibility: visible;
    opacity: 1;
    transform: translateY(-60%) translateX(2.5rem);
  }
`;

export const BtnContainer = styled.button<Props>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 1rem 3rem;
  color: var(--textColor);
  background-color: transparent;
  border-radius: 2rem;
  border: 0;

  .button__icon {
    transition: all 0.4s ease;
    font-size: 1.25rem;
  }

  .hidden__text {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-60%) translateX(1rem);
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }

  transition: all 0.4s;
  ${({ isActive }) => isActive && activeButtonStyles};
`;
