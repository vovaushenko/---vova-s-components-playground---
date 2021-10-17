import styled, { css } from 'styled-components';

const buttonCustomProps = css`
  /* 💡 we can use styled components global theme provider to initialize our custom props */
  --mainBg: ${({ theme }) => theme.colors.yellow.golden};
  --mainBg: rgb(255, 193, 48);
  --disabledBg: rgb(34, 34, 34);
  --mainTextColor: rgb(255, 255, 255);
  --textShadow: rgb(0 0 0 / 15%) 1px 1px 1px;
  --btnPadding: 1.5rem 3rem;
  --fontSize: 1rem;
  --fontWeight: 600;
  --borderRadius: 4px;
  --outlineColor: rgb(131, 238, 255);
`;

const defaultButton = css`
  /* reset default styles */
  all: unset;

  /* display */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* styling */
  position: relative;
  overflow: hidden;
  cursor: pointer;

  padding: var(--btnPadding);
  color: var(--mainTextColor);
  background-color: var(--mainBg);
  border-radius: var(--borderRadius);

  /* typography */
  font-family: inherit;
  font-size: var(--fontSize);
  text-transform: uppercase;
  font-weight: var(--fontWeight);
  text-shadow: var(--textShadow);

  /* animation */
  transition: 0.3s all ease;

  /* 3d - effect */
  :before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 1px;
    left: 2px;
    right: 2px;
    height: 35%;
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    border-radius: 4px 4px 100px 100px / 14px 14px 14px 14px;
  }
`;

const hoveredButton = css`
  transform: translateY(-2px);
  opacity: 0.95;
`;
const focusedButton = css`
  &:focus-visible {
    box-shadow: 0px 0px 3px 6px var(--outlineColor);
  }
`;
const disabledButton = css`
  background: var(--disabledBg);
  cursor: not-allowed;
`;
const activeButton = css`
  transform: scale(0.97);

  &:before {
    visibility: hidden;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 1px;
    left: 1px;
    right: 1px;
    height: 55%;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75)
    );
    border-radius: 14px 14px 14px 14px/ 4px 4px 100px 100px;
  }
`;
const loadingButton = css`
  background-color: yellow;
`;

const completedButton = css`
  background-color: orange;
`;

interface StyledButtonProps {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
}

export const BTN = styled.button<StyledButtonProps>`
  ${buttonCustomProps};
  ${defaultButton};

  &:hover {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton};
  }

  &:focus {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && focusedButton};
  }

  &:active {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && activeButton};
  }

  &:disabled {
    ${disabledButton};
  }
  ${(p) => p.isLoading && loadingButton};

  ${(p) => p.isCompleted && completedButton};
`;
