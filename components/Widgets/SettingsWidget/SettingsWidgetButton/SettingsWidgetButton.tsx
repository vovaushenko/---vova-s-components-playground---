import React, { ComponentPropsWithoutRef, useCallback, useState } from 'react';
import * as Styled from './SettingsWidgetButton.styles';

type ButtonProps = {
  onClickAction: () => void;
  withMemory?: boolean;
} & ComponentPropsWithoutRef<'button'>;

/**
 *@function SettingsWidgetButton
 *@param {function} onClickAction - specific onClick action
 *@param {boolean} withMemory - specifies whether button has "memory", if yes by clicking it will change background color and preserve this tatae
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SettingsWidgetButton: React.FunctionComponent<ButtonProps> = ({
  onClickAction,
  withMemory,
  children,
  ...buttonProps
}): JSX.Element => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    onClickAction();
    setIsTurnedOn((prev) => !prev);
  }, []);

  return (
    <Styled.BTN
      onClick={handleClick}
      isTurnedOn={withMemory ? isTurnedOn : false}
      {...buttonProps}
    >
      {children}
    </Styled.BTN>
  );
};

export default SettingsWidgetButton;
