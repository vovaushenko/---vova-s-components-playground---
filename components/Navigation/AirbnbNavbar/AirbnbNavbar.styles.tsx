import styled, { css } from 'styled-components';

interface ContainerProps {
  isNavbarTransparent: boolean;
  areLinksExpanded: boolean;
}

const transparentStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.text};
`;
const nonTransparentStyles = css`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.primary.text};
`;

export const Container = styled.header<ContainerProps>`
  z-index: ${({ theme }) => theme.zIndex.navigation};
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  ${({ isNavbarTransparent }) =>
    isNavbarTransparent ? transparentStyles : nonTransparentStyles};
  transition: max-height 0.2s ease;
  max-height: ${({ areLinksExpanded }) =>
    areLinksExpanded ? '10rem' : '5rem'};
`;

export const ListItem = styled.li``;

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
export const Center = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Right = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.textFontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  & .nav__icon {
    color: ${({ theme }) => theme.colors.primary.accent};
    margin-right: ${({ theme }) => theme.spacing.xxs};
  }
`;
