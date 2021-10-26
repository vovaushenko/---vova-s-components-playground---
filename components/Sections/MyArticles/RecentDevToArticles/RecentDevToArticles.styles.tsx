import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.primary.secondaryBg};
  padding: ${({ theme }) => theme.spacing.md};
`;
