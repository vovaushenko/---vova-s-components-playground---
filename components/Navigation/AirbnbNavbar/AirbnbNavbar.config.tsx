import { ReactNode } from 'react';
import { FiGithub, FiInstagram, FiLayout, FiLinkedin } from 'react-icons/fi';
import { SiStorybook } from 'react-icons/si';
import { FaDev } from 'react-icons/fa';

type HookReturnType = {
  centralLinks: NavigationLink[];
  socialLinks: NavigationLink[];
};

export const useNavbarConfig = (): HookReturnType => {
  const centralLinks: NavigationLink[] = [
    {
      id: 1,
      text: 'Playgrounds',
      icon: <FiLayout className={'nav__icon'} />,
      href: 'playgrounds',
    },
    {
      id: 2,
      text: 'Storybook',
      icon: <SiStorybook className={'nav__icon'} />,
      href: 'storybook',
    },
    {
      id: 3,
      text: 'Github',
      icon: <FiGithub className={'nav__icon'} />,
      href: 'playgrounds',
    },
  ];

  const socialLinks: NavigationLink[] = [
    {
      id: 1,
      text: 'Dev.to',
      icon: <FaDev className={'social__icon'} />,
      href: 'playgrounds',
    },
    {
      id: 2,
      text: 'Linkedin',
      icon: <FiLinkedin className={'social__icon'} />,
      href: 'playgrounds',
    },
    {
      id: 2,
      text: 'FiInstagram',
      icon: <FiInstagram className={'social__icon'} />,
      href: 'playgrounds',
    },
  ];

  return { centralLinks, socialLinks };
};

interface NavigationLink {
  id: number;
  text: string;
  icon: ReactNode;
  href: string;
}
