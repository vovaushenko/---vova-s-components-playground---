import styled from 'styled-components';

export const Container = styled.nav`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.gray.bg};
  border-radius: 2rem;
`;

export const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
export const LI = styled.li``;
