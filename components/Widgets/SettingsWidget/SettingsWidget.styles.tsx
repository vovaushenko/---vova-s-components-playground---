import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  menuWidth: number;
}

export const Container = styled.aside<Props>`
  z-index: ${({ theme }) => theme.zIndex.modal};

  position: absolute;
  top: 9%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  width: ${({ menuWidth }) => `${menuWidth}px`};
  min-height: ${({ menuWidth }) => `${menuWidth * 1.15}px`};
  background-image: ${({ theme }) => theme.gradients.lightGrayGradient};

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  transition: transform 0.5s ease;
  transform: ${({ isOpen, menuWidth }) =>
    isOpen ? `translateX(10px)` : `translateX(-${menuWidth + 50}px)`};

  @media ${({ theme }) => theme.media.tablet} {
    top: 50%;
  }
`;
