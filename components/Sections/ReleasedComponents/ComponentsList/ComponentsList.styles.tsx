import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  background-color: ${({ theme }) => theme.colors.primary.secondaryBg};
  padding: ${({ theme }) => theme.spacing.md};
`;
