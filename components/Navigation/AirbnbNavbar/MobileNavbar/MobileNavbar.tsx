import React, { useCallback, useState } from 'react';
import * as Styled from './MobileNavbar.styles';
import ExpandButton from '../ExpandButton/ExpandButton';
import Boop from '../../../Animations/Boop/Boop';
import { useNavbarConfig } from '../AirbnbNavbar.config';
import * as S from '../AirbnbNavbar.styles';
import Link from 'next/link';
import IconButton from '../../../Buttons/IconButton/IconButton';
import Logo from '../Logo/Logo';

/**
 *Renders mobile version of Airbnb navbar
 *@function MobileNavbar
 *@returns {JSX.Element} - Rendered Mobile Airbnb navbar component
 */
const MobileNavbar = (): JSX.Element => {
  const MOBILE_NAVBAR_HEIGHT = 5; // in rem, will be used heavily for calculating styles in Styled Container
  const { centralLinks, socialLinks } = useNavbarConfig();
  const [isRoutingExpanded, setIsRoutingExpanded] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setIsRoutingExpanded((prev) => !prev);
  }, []);

  return (
    <Styled.Container
      navbarHeight={MOBILE_NAVBAR_HEIGHT}
      isOpen={isRoutingExpanded}
    >
      <Boop boopConfig={{ y: 2, scale: 1.03, timing: 200 }}>
        <ExpandButton onClick={toggleModal} text={'Expand Options'} />
      </Boop>

      <Styled.RoutingModal
        isOpen={isRoutingExpanded}
        navbarHeight={MOBILE_NAVBAR_HEIGHT}
      >
        <Styled.LogoWrapper key={`trigger-animation-1${isRoutingExpanded}`}>
          <Logo isExpanded={true} />
        </Styled.LogoWrapper>

        <Styled.RouterLinks key={`trigger-animation-2${isRoutingExpanded}`}>
          {centralLinks.map((link) => (
            <S.ListItem key={link.id}>
              <Link href={link.href}>
                <S.A>
                  {link.icon}
                  {link.text}
                </S.A>
              </Link>
            </S.ListItem>
          ))}
        </Styled.RouterLinks>

        <Styled.SocialLinks key={`trigger-animation-3${isRoutingExpanded}`}>
          {socialLinks.map((link) => (
            <S.ListItem key={link.id}>
              <IconButton renderAs={'link'} href={link.href}>
                <Boop boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}>
                  {link.icon}
                </Boop>
              </IconButton>
            </S.ListItem>
          ))}
        </Styled.SocialLinks>
      </Styled.RoutingModal>
    </Styled.Container>
  );
};

export default MobileNavbar;
