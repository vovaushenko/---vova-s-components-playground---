import React, { ReactNode } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export interface IMyContact {
  id: number;
  icon: ReactNode;
  text: string;
  href: string;
}

/**
 * Custom hook to get contact info data
 *@function useContactConfig
 *@returns {IMyContact[]} myContacts - the hook returns array of social contacts with id, icon, text and href of social platform
 */
export const useSocialContacts = (): { myContacts: IMyContact[] } => {
  const myContacts: IMyContact[] = [
    {
      id: 1,
      icon: <FiTwitter className={'button__icon'} />,
      text: 'Twitter',
      href: 'https://twitter.com/vova_ush',
    },
    {
      id: 2,
      icon: <FiGithub className={'button__icon'} />,
      text: 'GitHub',
      href: 'https://github.com/vovaushenko',
    },
    {
      id: 3,
      icon: <FiLinkedin className={'button__icon'} />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vovau/',
    },
    {
      id: 4,
      icon: <FiInstagram className={'button__icon'} />,
      text: 'LinkedIn',
      href: 'https://www.instagram.com/vovacodes/',
    },
  ];

  return { myContacts };
};
