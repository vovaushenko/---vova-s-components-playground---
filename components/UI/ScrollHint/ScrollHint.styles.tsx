import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 80%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  left: 50%;

  animation: 2.35s linear 0s infinite normal none running scrollDown;

  .icon {
    font-size: 1.25rem;
  }

  @keyframes scrollDown {
    50% {
      transform: translateY(0.5rem);
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    top: 80%;
    left: 35%;
  }
`;
