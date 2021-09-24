import styled from 'styled-components';
import { IContextMenuItem } from './ContextMenuItem';

type ContainerProps = Pick<IContextMenuItem, 'withUnderline'>;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  cursor: pointer;
  border-bottom: ${({ withUnderline }) =>
    withUnderline ? '1px solid black' : ''};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: ${({ theme }) => theme.textFontSize.xs};
    text-transform: capitalize;
  }

  .icon {
    margin-top: 1px;
    font-size: ${({ theme }) => theme.textFontSize.sm};
  }
`;

interface Props {
  isContextMenuShown: boolean;
  rightOffset: number;
  distanceFromMainContainer: number;
}

export const ContextMenuWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  right: ${({ rightOffset, distanceFromMainContainer }) =>
    `-${rightOffset + distanceFromMainContainer}px`};
  visibility: ${({ isContextMenuShown }) =>
    isContextMenuShown ? 'visible' : 'hidden'};

  transition: visibility 0.2s ease;
`;
