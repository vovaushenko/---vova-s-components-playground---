import React from 'react';
import * as Styled from './PlaygroundsFooter.styles';
import Logo from '../../Navigation/AirbnbNavbar/Logo/Logo';
import Paragraph from '../../Typography/Paragraph/Paragraph';
import Heading from '../../Typography/Heading/Heading';
import { useSocialContacts } from '../../../hooks/useContacts';
import IconButton from '../../Buttons/IconButton/IconButton';
import WaveDivider from '../../Image/WaveDivider/WaveDivider';
import Boop from '../../Animations/Boop/Boop';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

/**
 *Renders main footer for the playgrounds web page
 *@function PlaygroundsFooter
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered PlaygroundsFooter component
 */
const PlaygroundsFooter = (): JSX.Element => {
  const { myContacts } = useSocialContacts();
  const { theme } = useTypedSelector((state) => state.ui);
  const DIVIDER_HEIGHT = '200px';
  const FOOTER_DIVIDER =
    theme === 'dark'
      ? '/divider/dark-divider-top.svg'
      : '/divider/light-divider-top.svg';
  return (
    <>
      <WaveDivider waveImg={FOOTER_DIVIDER} dividerHeight={DIVIDER_HEIGHT} />
      <Styled.Footer>
        <Styled.LeftColumn>
          <Logo isExpanded={true} />
          <Paragraph>Thanks for your visit and reading! Cheers!</Paragraph>
          <Paragraph>
            © 2021-present Vova Ushenko. All Rights Reserved.
          </Paragraph>
        </Styled.LeftColumn>

        <Styled.RightColumn>
          <Heading>Connect</Heading>
          <Styled.SocialsList>
            {myContacts.map((contact) => (
              <li key={contact.id}>
                <Boop boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}>
                  <IconButton renderAs={'link'} href={contact.href}>
                    {contact.icon}
                  </IconButton>
                </Boop>
              </li>
            ))}
          </Styled.SocialsList>
        </Styled.RightColumn>
      </Styled.Footer>
    </>
  );
};

export default PlaygroundsFooter;
