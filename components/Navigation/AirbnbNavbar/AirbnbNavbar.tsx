import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './AirbnbNavbar.styles';
import Link from 'next/link';
import { Maybe } from '../../../types/utility-types';
import NavbarSearch from './NavbarSearch/NavbarSearch';
import { useNavbarConfig } from './AirbnbNavbar.config';
import Logo from './Logo/Logo';
import IconButton from '../../Buttons/IconButton/IconButton';
import Boop from '../../Animations/Boop/Boop';
import ExpandButton from './ExpandButton/ExpandButton';
import { useMediaQuery } from '@react-hook/media-query';
import MobileNavbar from './MobileNavbar/MobileNavbar';

/**
 *Renders navbar in airbnb-like animation style
 *@function AirbnbNavbar
 *@returns {JSX.Element} - Rendered CardContent component
 */
const AirbnbNavbar = (): JSX.Element => {
  const isOnMobile = useMediaQuery('only screen and (max-width: 768px)');
  const navbarRef = useRef<Maybe<HTMLDivElement>>(null);
  const [navbarHeight, setNavbarHeight] = useState<Maybe<number>>(null);
  const [scrollY, setScrollY] = useState<Maybe<number>>(null);
  const [isNavbarTransparent, setNavbarTransparent] = useState<boolean>(true);
  const [areLinksExpanded, setLinksExpanded] = useState<boolean>(true);

  const { centralLinks, socialLinks } = useNavbarConfig();

  useEffect(() => {
    if (navbarRef.current) {
      const { height } = navbarRef.current.getBoundingClientRect();
      setNavbarHeight(height);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('click', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY && navbarHeight) {
      if (scrollY >= navbarHeight * 1.25) {
        setNavbarTransparent(false);
        setLinksExpanded(false);
      } else {
        setNavbarTransparent(true);
        setLinksExpanded(true);
      }
    }
  }, [scrollY]);

  const toggleLinksExpanded = useCallback(() => {
    setLinksExpanded((prev) => !prev);
  }, []);

  return isOnMobile ? (
    <MobileNavbar />
  ) : (
    <S.Container
      ref={navbarRef}
      isNavbarTransparent={isNavbarTransparent}
      areLinksExpanded={areLinksExpanded}
    >
      <S.Navigation>
        {/*LEFT*/}
        <S.Left>
          <Boop boopConfig={{ scale: 1.1 }}>
            <Logo isExpanded={areLinksExpanded} />
          </Boop>
        </S.Left>
        {/*////END OF LEFT////*/}

        {/*CENTER*/}
        <S.Center>
          {areLinksExpanded ? (
            <>
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
            </>
          ) : (
            <Boop boopConfig={{ y: 2, scale: 1.03, timing: 200 }}>
              <ExpandButton
                onClick={toggleLinksExpanded}
                text={'Expand Options'}
              />
            </Boop>
          )}
        </S.Center>
        {/*////END OF CENTER////*/}

        {/*RIGHT*/}
        <S.Right>
          {socialLinks.map((link) => (
            <S.ListItem key={link.id}>
              <IconButton renderAs={'link'} href={link.href}>
                <Boop boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}>
                  {link.icon}
                </Boop>
              </IconButton>
            </S.ListItem>
          ))}
        </S.Right>
        {/*////END OF RIGHT////*/}
      </S.Navigation>
      {/*////NAVBAR BOTTOM SEARCH ////*/}
      <NavbarSearch isExpanded={areLinksExpanded} />
    </S.Container>
  );
};

export default AirbnbNavbar;
