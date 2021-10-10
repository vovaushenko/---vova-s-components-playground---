import React from 'react';
import * as Styled from './IconButton.styles';

export type ButtonProps =
  | (React.ComponentPropsWithoutRef<'button'> & { renderAs: 'button' })
  | ({
      renderAs: 'link';
      href: string;
    } & React.ComponentPropsWithoutRef<'a'>);

/**
 *Renders IconButton in two variants, either a button or <a> link
 *@function IconButton
 *@param {string} renderAs - specifies whether button or link will be rendered
 *@param {string} href - specifies href for external link
 *@returns {JSX.Element} - Rendered CardContent component
 */
const IconButton: React.FunctionComponent<ButtonProps> = (
  props
): JSX.Element => {
  if (props.renderAs === 'link') {
    return (
      <Styled.Container
        as={'a'}
        href={props.href}
        target="_blank"
        rel="noopener"
      >
        {props.children}
      </Styled.Container>
    );
  }

  return <Styled.Container {...props}>{props.children}</Styled.Container>;
};
export default IconButton;
