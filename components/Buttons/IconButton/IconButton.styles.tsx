import styled from 'styled-components';

export const Container = styled.button`
  z-index: ${({ theme }) => theme.zIndex.lowPriority};
  cursor: pointer;
  background-color: transparent;
  border: 0;

  & .button__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: ${({ theme }) => theme.textFontSize.xl};
  }

  & :active {
    transition: all 0.2s ease;
    transform: scale(0.92);
  }
`;
