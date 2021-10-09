import React from 'react';
import * as Styled from './NavbarSearch.styles';

export interface Props {
  isExpanded: boolean;
}

/**
 *@function NavbarSearch
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered NavbarSearch component
 */
const NavbarSearch = ({ isExpanded }: Props): JSX.Element => {
  return (
    <Styled.Container isExpanded={isExpanded}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur
        consequatur et illo labore quia.
      </p>
    </Styled.Container>
  );
};

export default NavbarSearch;
