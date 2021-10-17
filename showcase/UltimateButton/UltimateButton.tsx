import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import * as Styled from './UltimateButton.styles';

export type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// 💡 NOTE. In generic the HTML type of component will be specified. And by default it is button
const UltimateButton = <T extends ElementType = 'button'>({
  renderAs,
  isLoading,
  isCompleted,
  children,
  ...rest
}: ButtonProps<T>): JSX.Element => {
  return (
    <Styled.BTN
      as={renderAs}
      isLoading={isLoading}
      isCompleted={isCompleted}
      {...rest}
    >
      {children}
    </Styled.BTN>
  );
};

export default UltimateButton;
