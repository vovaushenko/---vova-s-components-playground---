import React, { useCallback, useState } from 'react';
import * as Styled from './Playgrounds.styles';
import GenericButton from '../../components/Buttons/GenericButton/GenericButton';
import WithSparkles from '../../components/UI/Sparkles/WithSparkles';
import ContextMenu from '../../components/UI/ContextMenu/ContextMenu';

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
  return (
    <Styled.Container>
      <WithSparkles color={'yellow'}>
        <GenericButton onClick={toggleContextMenu}>CLICK</GenericButton>
      </WithSparkles>
      {isStateMenuOpen && (
        <ContextMenu
          contextMenuItems={[
            { id: 1, text: 'View', action: null, withUnderline: true },
            {
              id: 2,
              text: 'Sort by',
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
    </Styled.Container>
  );
};

export default Playgrounds;
