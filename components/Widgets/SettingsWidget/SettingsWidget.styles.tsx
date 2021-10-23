import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  menuWidth: number;
}

export const Container = styled.aside<Props>`
  z-index: ${({ theme }) => theme.zIndex.modal};

  position: fixed;
  top: 35%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  min-width: ${({ menuWidth }) => `${menuWidth}px`};
  min-height: ${({ menuWidth }) => `${menuWidth * 1.15}px`};
  background-image: ${({ theme }) => theme.gradients.lightGrayGradient};
  padding: ${({ theme }) => theme.spacing.md};

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  transition: transform 0.5s ease;
  transform: ${({ isOpen, menuWidth }) =>
    isOpen ? `translateX(10px)` : `translateX(-${menuWidth + 50}px)`};

  @media ${({ theme }) => theme.media.tablet} {
    top: 50%;
  }
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
`;
