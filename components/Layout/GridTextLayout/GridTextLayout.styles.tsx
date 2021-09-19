import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
  gap: 2rem;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    height: 340px;
    object-fit: cover;
    /**
    * Full bleed children will span for full width 1 / -1
     */
    grid-column: 1 / -1;
  }
`;
