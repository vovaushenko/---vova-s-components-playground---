import React from 'react';
import * as Styled from './BottomNavigation.styles';
import BottomNavBtn from './BottomNavBtn';
import { useBottomNavConfig } from './BottomNavigation.config';

export interface NavigationProps {
  buttonActiveColor: string;
  buttonTextColor: string;
}

/**
 *@INITIAL DRAFT ===== COMPONENT IS IN DEVELOPMENT===
 *@function BottomNavigation
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const BottomNavigation = ({
  buttonActiveColor,
  buttonTextColor,
}: NavigationProps): JSX.Element => {
  const { bottomNavButtons } = useBottomNavConfig();

  return (
    <Styled.Container>
      <Styled.UL>
        {bottomNavButtons.map((navBtn) => (
          <Styled.LI key={navBtn.id}>
            <BottomNavBtn
              action={navBtn.action}
              text={navBtn.text}
              icon={navBtn.icon}
              bgColor={buttonActiveColor}
              textColor={buttonTextColor}
            />
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default BottomNavigation;
