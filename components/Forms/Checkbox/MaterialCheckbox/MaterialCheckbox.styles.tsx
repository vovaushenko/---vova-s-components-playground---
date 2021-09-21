import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;

  input {
    position: absolute;
    transform: scale(0);
  }

  .checkbox {
    display: block;
    width: var(--width);
    height: var(--height);
    border: 4px solid rgba(255, 255, 255, 0.175);
    transition: all 0.3s;
  }

  input:checked ~ .checkbox {
    transform: rotate(45deg);
    width: 12px;
    border-color: ${({ theme }) => theme.colors.yellow.golden};
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;
