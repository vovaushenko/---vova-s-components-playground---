import React, { useCallback, useState } from 'react';
import GenericButton from '../../components/Buttons/GenericButton/GenericButton';
import ContextMenu from '../../components/UI/ContextMenu/ContextMenu';
import WithSparkles from '../../components/UI/Sparkles/WithSparkles';
import { useGetMouseCoordinates } from '../../hooks/useGetMouseCoordinates';
import { debounce } from '../../utils/index';
import * as Styled from './Playgrounds.styles';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  const [isStateMenuOpen, setIsStateMenuOpen] = useState<boolean>(false);
  const toggleContextMenu = useCallback(() => {
    setIsStateMenuOpen((prev) => !prev);
  }, []);

  const [mouseX, setMouseX] = React.useState(0);

  const handleRightMouseClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsStateMenuOpen(true);
  };

  const { x, y } = useGetMouseCoordinates();

  const handleMouseMove = React.useCallback(
    debounce((ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setMouseX(ev.clientX);
    }, 250),
    []
  );

  return (
    <Styled.Container
      onContextMenu={handleRightMouseClick}
      onMouseMove={handleMouseMove}
    >
      <WithSparkles color={'yellow'}>
        <GenericButton onClick={toggleContextMenu}>CLICK</GenericButton>
      </WithSparkles>
      {isStateMenuOpen && (
        <ContextMenu
          locationCoordinates={{ x, y }}
          contextMenuItems={[
            { id: 1, text: 'View', action: null, withUnderline: true },
            {
              id: 2,
              text: 'Sort by',
              action: null,
              withUnderline: true,
              hoverMenuItems: [
                { id: 1, text: 'View', action: null },
                {
                  id: 2,
                  text: 'View',
                  action: null,
                  hoverMenuItems: [
                    { id: 1, text: 'View', action: null },
                    { id: 2, text: 'View', action: null },
                  ],
                },
                {
                  id: 3,
                  text: 'View',
                  action: null,
                },
              ],
            },
            {
              id: 3,
              text: 'Refresh',
              action: () => alert('Refresh'),
            },
            { id: 4, text: 'View', action: null },
            {
              id: 5,
              text: 'Items',
              action: null,
              withUnderline: true,
              hoverMenuItems: [
                { id: 1, text: 'View', action: null },
                { id: 2, text: 'View', action: null },
                {
                  id: 3,
                  text: 'View',
                  action: null,
                },
                {
                  id: 4,
                  text: 'Refresh',
                  action: () => alert('Refresh'),
                },
                {
                  id: 5,
                  text: 'Refresh',
                  action: () => alert('Refresh'),
                },
                {
                  id: 6,
                  text: 'Refresh',
                  action: () => alert('Refresh'),
                },
                {
                  id: 7,
                  text: 'Refresh',
                  action: () => alert('Refresh'),
                },
                {
                  id: 8,
                  text: 'Refresh',
                  action: () => alert('Refresh'),
                },
              ],
            },

            {
              id: 5,
              text: 'Refresh',
              action: () => alert('Refresh'),
            },
          ]}
        />
      )}

      <pre>{`X${x} Y${y}`}</pre>
      <pre>{`X${mouseX}`}</pre>
    </Styled.Container>
  );
};

export default Playgrounds;
