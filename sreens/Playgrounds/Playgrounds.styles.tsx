import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary.background};
`;
