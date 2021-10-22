import React from 'react';
import * as Styled from './IconButton.styles';
import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';

export type ButtonProps =
  | (React.ComponentPropsWithoutRef<'button'> & { renderAs: 'button' })
  | ({
      renderAs: 'link';
      href: string;
    } & React.ComponentPropsWithoutRef<'a'>)
  | ({
      renderAs: 'routerLink';
      href: string;
    } & React.PropsWithChildren<LinkProps>);

/**
 *Renders IconButton in two variants, either a button or <a> link
 *@function IconButton
 *@param {string} renderAs - specifies whether button, link or router link will be rendered
 *@param {string} href - specifies href for external link or router link
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

  if (props.renderAs === 'routerLink') {
    return (
      <Link href={props.href}>
        <Styled.Container>{props.children}</Styled.Container>
      </Link>
    );
  }

  return <Styled.Container {...props}>{props.children}</Styled.Container>;
};
export default IconButton;
