import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  border-radius: 4px;
  width: 200px;

  background: rgba(3, 21, 41, 0.616);
  backdrop-filter: blur(20.5px);
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 4%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%),
    0 41.8px 33.4px rgb(0 0 0 / 8%), 0 100px 80px rgb(0 0 0 / 11%);
`;
