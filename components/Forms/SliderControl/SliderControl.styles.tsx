import styled, { css } from 'styled-components';

interface Props {
  progress: string;
}

const lightStyles = css<Props>`
  --slider-color: ${({ theme }) => theme.colors.yellow.golden};
  --slider-thumb: #fff;
`;
const darkStyles = css<Props>`
  --slider-color: ${({ theme }) => theme.colors.yellow.golden};
  --slider-thumb: ${({ theme }) => theme.colors.gray.dark};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.25rem;

    filter: ${({ theme }) => `drop-shadow(${theme.boxShadows.base})`};
  }
`;

export const Input = styled.input<Props>`
  ${({ theme }) => (theme.theme === 'dark' ? darkStyles : lightStyles)};

  width: 100%;
  margin-left: ${({ theme }) => theme.spacing.xxs};
  -webkit-appearance: none;
  height: 5px;
  border-radius: 5px;
  outline: none;
  opacity: 0.95;
  transition: opacity 0.2s ease-in;
  box-shadow: ${({ theme }) => theme.boxShadows.base};

  background: ${({ progress }) => `linear-gradient(
    to right,
    var(--slider-color) 0%,
    var(--slider-color) ${progress}%,
    #fff 50%,
    #fff 100%
  )`};

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue.neon};
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 4px solid var(--slider-thumb);
    background: var(--slider-color);
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadows.base};
  }
`;
