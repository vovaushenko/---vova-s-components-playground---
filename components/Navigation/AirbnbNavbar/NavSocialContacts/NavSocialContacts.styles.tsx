import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ContactsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  background: ${({ theme }) => theme.colors.primary.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 2rem;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
