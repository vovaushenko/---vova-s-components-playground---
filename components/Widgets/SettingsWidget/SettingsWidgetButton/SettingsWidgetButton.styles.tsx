import styled, { css } from 'styled-components';

interface StyledProps {
  isTurnedOn: boolean;
}

const turnedOnStyles = css`
  background-color: ${({ theme }) => theme.colors.primary.accent};
`;
const turnedOffStyles = css`
  background-color: transparent;
`;

export const BTN = styled.button<StyledProps>`
  all: unset;
  /* display */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  /* styling */
  width: 75%;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  cursor: pointer;
  font-weight: bold;

  transition: background-color 0.2s ease-in-out;
  ${({ isTurnedOn }) => (isTurnedOn ? turnedOnStyles : turnedOffStyles)};
`;
