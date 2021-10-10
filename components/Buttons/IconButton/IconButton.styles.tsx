import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  & .button__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: ${({ theme }) => theme.textFontSize.xl};
  }
`;
