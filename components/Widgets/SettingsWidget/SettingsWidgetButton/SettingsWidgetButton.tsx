import React, { ComponentPropsWithoutRef, useCallback, useState } from 'react';
import * as Styled from './SettingsWidgetButton.styles';

type ButtonProps = {
  onClickAction: () => void;
} & ComponentPropsWithoutRef<'button'>;

/**
 *@function SettingsWidgetButton
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SettingsWidgetButton: React.FunctionComponent<ButtonProps> = ({
  onClickAction,
  children,
  ...buttonProps
}): JSX.Element => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    onClickAction();
    setIsTurnedOn((prev) => !prev);
  }, []);

  return (
    <Styled.BTN onClick={handleClick} isTurnedOn={isTurnedOn} {...buttonProps}>
      {children}
    </Styled.BTN>
  );
};

export default SettingsWidgetButton;
