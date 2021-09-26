import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;
  min-width: 100vw;
  background-color: gray;

  .wrapper {
    max-width: 400px;
  }
`;
