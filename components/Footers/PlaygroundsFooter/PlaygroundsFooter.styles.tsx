import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  min-height: 10rem;
`;

export const LeftColumn = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const RightColumn = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  h3 {
    writing-mode: vertical-rl;
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxs};
`;
