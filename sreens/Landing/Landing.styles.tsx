import styled from 'styled-components';

interface ContainerProps {
  dividerHeight: string;
}

export const LandingSection = styled.section<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: ${({ dividerHeight }) => `calc(100vh - ${dividerHeight})`};
`;

export const ArticlesSection = styled.section``;
