import styled, { css } from 'styled-components';
import { Props } from './SimpleCheckbox';

const simpleVariantStyles = css`
  .check-icon {
    font-size: var(--check-icon-size);
    display: none;
  }

  input:checked ~ .checkbox .check-icon {
    display: block;
  }
`;

const fadeVariantCss = css`
  .check-icon {
    font-size: var(--check-icon-size);
    opacity: 0;
    transition: all 0.3s ease;
  }

  input:checked ~ .checkbox .check-icon {
    opacity: 1;
  }
`;

const animatedVariantCss = css`
  .check-icon {
    font-size: var(--check-icon-size);
    opacity: 0;
    transition: opacity 0.3s ease;
    visibility: hidden;
  }

  input:checked ~ .checkbox .check-icon {
    opacity: 1;
    visibility: visible;
    animation: bounce-top 0.9s both;

    @keyframes bounce-top {
      0% {
        transform: translateY(-8px);
        animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        transform: translateY(-4px);
        animation-timing-function: ease-in;
      }
      65% {
        transform: translateY(-2px);
        animation-timing-function: ease-in;
      }

      25%,
      55%,
      75%,
      87% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
        opacity: 1;
      }
    }
  }
`;

type LabelProps = Pick<Props, 'variant'>;

export const Label = styled.label<LabelProps>`
  cursor: pointer;

  input {
    position: absolute;
    transform: scale(0);
  }

  .checkbox {
    display: grid;
    place-items: center;
    width: var(--width);
    height: var(--height);
    border-radius: ${({ theme }) => theme.border.base};
    background-color: rgba(255, 255, 255, 0.175);
  }

  input:checked ~ .checkbox {
    background-color: ${({ theme }) => theme.colors.green.success};
  }

  ${({ variant }) => variant === 'fade' && fadeVariantCss};
  ${({ variant }) => variant === 'simple' && simpleVariantStyles};
  ${({ variant }) => variant === 'animated' && animatedVariantCss};
`;
