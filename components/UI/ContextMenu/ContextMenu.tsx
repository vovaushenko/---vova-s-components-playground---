import React from 'react';
import * as Styled from './ContextMenu.styles';
import ContextMenuItem, { IContextMenuItem } from './ContextMenuItem';

interface Props {
  contextMenuItems: IContextMenuItem[];
}

/**
 *@function ContextMenu
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const ContextMenu = ({ contextMenuItems }: Props): JSX.Element => {
  return (
    <Styled.Container>
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
