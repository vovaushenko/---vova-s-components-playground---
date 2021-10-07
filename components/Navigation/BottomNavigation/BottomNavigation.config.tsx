import { FiSearch, FiSettings, FiShare2 } from 'react-icons/fi';
import { NavButton } from './BottomNavBtn';

type NavigationButton = Pick<NavButton, 'text' | 'action' | 'icon'> & {
  id: number;
};

export const useBottomNavConfig = (): {
  bottomNavButtons: NavigationButton[];
} => {
  const bottomNavButtons: NavigationButton[] = [
    {
      id: 1,
      icon: <FiSearch className="button__icon" />,
      action: () => alert('click'),
      text: 'Search',
    },
    {
      id: 2,
      icon: <FiShare2 className="button__icon" />,
      action: () => alert('click'),
      text: 'Share',
    },
    {
      id: 3,
      icon: <FiSettings className="button__icon" />,
      action: () => alert('click'),
      text: 'Configure',
    },
  ];
  return {
    bottomNavButtons,
  };
};
