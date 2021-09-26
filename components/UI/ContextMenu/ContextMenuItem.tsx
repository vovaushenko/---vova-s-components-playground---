import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './ContextMenuItem.styles';
import { FiChevronRight } from 'react-icons/fi';
import ContextMenu from './ContextMenu';

export interface IContextMenuItem {
  id: number;
  text: string;
  action: null | (() => void);
  iconSrc?: string;
  hoverMenuItems?: IContextMenuItem[];
  withUnderline?: boolean;
}

/**
 *@function ContextMenuItem
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ContextMenuItem component
 */
const ContextMenuItem = ({
  text,
  hoverMenuItems,
  action,

  withUnderline,
}: IContextMenuItem): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isContextMenuShown, setIsContextMenuShown] = useState<boolean>(false);
  const DISTANCE_FROM_MAIN_CONTAINER = 5; // this constant is the distance between main container and hoverable content

  const handleClick = () => {
    action && action();
  };

  useEffect(() => {
    // for hoverable context menu items, their content will be absolutely positioned in ContextMenuWrapper
    // in this useEffect we firstly get width of container and then this param will be used as right-offset for absolute positioning in ContextMenuWrapper
    if (containerRef.current) {
      const { width }: DOMRect = containerRef.current.getBoundingClientRect();

      setContainerWidth(width);
    }
  }, []);

  return (
    <>
      <Styled.Container
        ref={containerRef}
        withUnderline={withUnderline}
        onClick={handleClick}
        onMouseEnter={() => setIsContextMenuShown(true)}
        onMouseLeave={() => setIsContextMenuShown(false)}
      >
        <p>{text}</p>

        {hoverMenuItems !== undefined && <FiChevronRight className={'icon'} />}

        {hoverMenuItems !== undefined && (
          <Styled.ContextMenuWrapper
            isContextMenuShown={isContextMenuShown}
            rightOffset={containerWidth}
            distanceFromMainContainer={DISTANCE_FROM_MAIN_CONTAINER}
          >
            <ContextMenu
              contextMenuItems={hoverMenuItems}
              locationCoordinates={{ x: 0, y: 0 }}
            />
          </Styled.ContextMenuWrapper>
        )}
      </Styled.Container>
    </>
  );
};

export default ContextMenuItem;
