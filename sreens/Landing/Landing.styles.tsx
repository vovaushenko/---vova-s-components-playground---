import styled from 'styled-components';

interface ContainerProps {
  dividerHeight: string;
}

export const LandingSection = styled.section<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  min-height: ${({ dividerHeight }) => `calc(100vh - ${dividerHeight})`};
`;

export const ArticlesSection = styled.section``;
export const ComponentsSection = styled.section``;
