import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

/**
 *@function IsomorphicButton
 *@returns {JSX.Element} - Rendered CardContent component
 */
const IsomorphicBtn = <T extends ElementType = 'button'>({
  as,
  children,
  ...rest
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>): JSX.Element => {
  return (
    <IsomorphicButton as={as as ElementType} {...rest}>
      {children}
    </IsomorphicButton>
  );
};

const IsomorphicButton = styled.button`
  border: 0;
  border-radius: 0.5rem;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.yellow.golden};
`;

export default IsomorphicBtn;
