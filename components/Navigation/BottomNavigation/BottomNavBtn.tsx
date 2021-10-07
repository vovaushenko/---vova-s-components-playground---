import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import * as Styled from './BottomNavBtn.styles';

export interface NavButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
  bgColor: string;
  textColor: string;
  action: () => void | null;
}

/**
 *@INITIAL DRAFT ===== COMPONENT IS IN DEVELOPMENT===
 *@function BottomNavBtn
 *@param {ReactNode} icon - displayed icon
 *@param {string} text - initially hidden text to be revealed on click
 *@returns {JSX.Element} - Rendered CardContent component
 */
const BottomNavBtn = ({
  text,
  icon,
  bgColor,
  textColor,
}: NavButton): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const cssCustomProps = {
    '--bgColor': bgColor,
    '--textColor': textColor,
  } as React.CSSProperties;

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Styled.BtnContainer
      style={cssCustomProps}
      onClick={handleClick}
      isActive={isActive}
    >
      {icon}

      <span className="hidden__text">{text}</span>
    </Styled.BtnContainer>
  );
};

export default BottomNavBtn;
