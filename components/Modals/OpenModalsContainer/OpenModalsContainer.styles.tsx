import styled from 'styled-components';

export const Container = styled.div`
  z-index: ${({ theme }) => theme.zIndex.highestPriority};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`;

export const ModalWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
