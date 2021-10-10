import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './AirbnbNavbar.styles';
import Link from 'next/link';
import { Maybe } from '../../../types/utility-types';
import NavbarSearch from './NavbarSearch';
import { FiSearch } from 'react-icons/fi';
import { useNavbarConfig } from './AirbnbNavbar.config';
import Logo from './Logo/Logo';
import IconButton from '../../Buttons/IconButton/IconButton';
import Boop from '../../Animations/Boop/Boop';

/**
 *@function AirbnbNavbar
 *@returns {JSX.Element} - Rendered CardContent component
 */
const AirbnbNavbar = (): JSX.Element => {
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

  return (
    <S.Container
      ref={navbarRef}
      isNavbarTransparent={isNavbarTransparent}
      areLinksExpanded={areLinksExpanded}
    >
      <S.Navigation>
        {/*LEFT*/}
        <S.Left>
          <Logo isExpanded={areLinksExpanded} />
        </S.Left>
        {/*////END OF LEFT////*/}

        {/*CENTER*/}
        <S.Center>
          {areLinksExpanded ? (
            <>
              {centralLinks.map((link) => (
                <Link href={link.href} key={link.id}>
                  <S.A>
                    {link.icon} {link.text}
                  </S.A>
                </Link>
              ))}
            </>
          ) : (
            <>
              <S.SearchButton onClick={toggleLinksExpanded}>
                <p className={'btn__text'}>Search More</p>
                <S.SearchIcon>
                  <FiSearch className="search__icon" />
                </S.SearchIcon>
              </S.SearchButton>
            </>
          )}
        </S.Center>
        {/*////END OF CENTER////*/}

        {/*RIGHT*/}
        <S.Right>
          {socialLinks.map((link) => (
            <IconButton key={link.id} renderAs={'link'} href={link.href}>
              <Boop boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}>
                {link.icon}
              </Boop>
            </IconButton>
          ))}
        </S.Right>
        {/*////END OF RIGHT////*/}
      </S.Navigation>
      <NavbarSearch isExpanded={areLinksExpanded} />
    </S.Container>
  );
};

export default AirbnbNavbar;
