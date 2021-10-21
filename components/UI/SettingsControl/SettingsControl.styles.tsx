import styled from 'styled-components';

export const Container = styled.aside`
  z-index: ${({ theme }) => theme.zIndex.navigation};
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
