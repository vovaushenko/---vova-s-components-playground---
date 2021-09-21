import styled, { css, keyframes } from 'styled-components';

const gooeyIn = keyframes`
  45% {
    transform: scaleX(1.45);
  }
`;
const gooeyOut = keyframes`
  55% {
    transform: scaleX(1.15);
  }
`;
const gooeyInAnimation = css`
  animation: ${gooeyIn} 0.35s;
`;
const gooeyOutAnimation = css`
  animation: ${gooeyOut} 0.35s;
`;

export const Label = styled.label`
  cursor: pointer;
`;

interface Props {
  isChecked: boolean;
}

export const Knob = styled.span<Props>`
  display: block;
  width: var(--knobSize, 32px);
  height: var(--knobSize, 32px);
  border-radius: 50%;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.gray.bg : theme.colors.yellow.golden};

  ${({ isChecked }) => (isChecked ? gooeyInAnimation : gooeyOutAnimation)};
  margin-left: ${({ isChecked }) => isChecked && 'var(--half-width)'};
  transition: all 0.35s;
`;

export const Switch = styled.span`
  display: block;
  width: var(--width, 76px);
  padding: 4px;
  border-radius: var(--switch-radius, 20px);
  background-color: ${({ theme }) => theme.colors.gray.bg};
  transition: all 0.35s;
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${Switch} {
    background-color: ${({ theme }) => theme.colors.blue.neon};
  }
`;
