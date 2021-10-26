import React from 'react';
import * as Styled from './NavSocialContacts.styles';
import { IMyContact } from '../../../../hooks/useContacts';
import Boop from '../../../Animations/Boop/Boop';
import IconButton from '../../../Buttons/IconButton/IconButton';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';

export interface Props {
  socialContacts: IMyContact[];
}

/**
 *Renders list of my personal social contacts in navbar search modal
 *@function NavSocialContacts
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered NavSocialContacts component
 */
const NavSocialContacts = ({ socialContacts }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <SectionHeader variant={'l'}>Feel free to say hi!</SectionHeader>
      <Styled.ContactsList>
        {socialContacts.map((contact) => (
          <li key={contact.id}>
            <Boop boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}>
              <IconButton renderAs={'link'} href={contact.href}>
                {contact.icon}
              </IconButton>
            </Boop>
          </li>
        ))}
      </Styled.ContactsList>
    </Styled.Container>
  );
};

export default NavSocialContacts;
