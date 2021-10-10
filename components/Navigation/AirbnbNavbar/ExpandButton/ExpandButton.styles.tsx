import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  cursor: pointer;
  background-color: transparent;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  box-shadow: ${({ theme }) => theme.boxShadows.base};
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.colors.primary.accent};

  /**
   * ----------------------------------------
   * animation slide-in-blurred-bottom
   * ----------------------------------------
   */
  @keyframes slide-in-blurred-bottom {
    0% {
      transform: translateY(10px) scaleY(10) scaleX(10);
      filter: blur(40px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);

      filter: blur(0);
      opacity: 1;
    }
  }

  animation: slide-in-blurred-bottom 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;

  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.medium};
  }
`;

export const ButtonText = styled.p`
  font-size: ${({ theme }) => theme.textFontSize.lg};
`;

export const SearchIcon = styled.div`
  .search__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: 1.5rem;
    margin-top: 4px;
  }
`;
