import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  right: 1rem;
  top: 50%;
  padding: 1rem;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
export const LI = styled.li``;
export const SettingsButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  & .settings__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: ${({ theme }) => theme.textFontSize.xl};
  }
`;
