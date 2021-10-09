import styled, { css } from 'styled-components';

interface ContainerProps {
  isNavbarTransparent: boolean;
  areLinksExpanded: boolean;
}

const transparentStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white.standard};
`;
const nonTransparentStyles = css`
  background-color: ${({ theme }) => theme.colors.white.standard};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.white.standard};
`;

export const Container = styled.header<ContainerProps>`
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  ${({ isNavbarTransparent }) =>
    isNavbarTransparent ? transparentStyles : nonTransparentStyles};
  transition: max-height 0.2s ease;
  max-height: ${({ areLinksExpanded }) =>
    areLinksExpanded ? '10rem' : '6rem'};
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 2rem;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.figure`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const Figcaption = styled.figcaption`
  font-size: ${({ theme }) => theme.textFontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.textFontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  & .nav__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    margin-right: ${({ theme }) => theme.spacing.xxxs};
  }

  & .social__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: ${({ theme }) => theme.textFontSize.lg};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  width: 18rem;
  background-color: transparent;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  box-shadow: ${({ theme }) => theme.boxShadows.base};
  padding: 0.75rem 0.5rem;
  color: ${({ theme }) => theme.colors.primary.accent};

  & .btn__text {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.textFontSize.lg};
  }

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

export const SearchIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.purple};
  heigth: 35px;
  width: 35px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .search__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-size: 1rem;
  }
`;
