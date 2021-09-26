import React from 'react';
import * as Styled from './ContextMenu.styles';
import ContextMenuItem, { IContextMenuItem } from './ContextMenuItem';

export interface Props {
  contextMenuItems: IContextMenuItem[];
  locationCoordinates: { x: number; y: number };
}

/**
 *@function ContextMenu
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const ContextMenu = ({
  contextMenuItems,
  locationCoordinates,
}: Props): JSX.Element => {
  console.log(locationCoordinates);
  return (
    <Styled.Container locationCoordinates={locationCoordinates}>
      {contextMenuItems.map((item) => (
        <ContextMenuItem
          key={item.id}
          id={item.id}
          text={item.text}
          action={item.action}
          hoverMenuItems={item.hoverMenuItems}
          iconSrc={item.iconSrc}
          withUnderline={item.withUnderline}
        />
      ))}
    </Styled.Container>
  );
};
export default ContextMenu;
