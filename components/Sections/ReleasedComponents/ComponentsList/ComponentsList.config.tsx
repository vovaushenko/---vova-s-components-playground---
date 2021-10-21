import { IComponentArticle } from '../../../../models/IComponentArticle';
import UltimateButton from '../../../../showcase/UltimateButton/UltimateButton';

export const useComponentsListConfig = (): {
  releasedComponents: IComponentArticle[];
} => {
  const releasedComponents: IComponentArticle[] = [
    {
      id: 1,
      title: 'Ultimate Button',
      description:
        'Today we will be busy building the ULTIMATE button. I’m joking of course. We will build the first part of our small library of reusable components - a button that is ready for the modern challenges. Button that will have a number of different statuses and that is capable of displaying these statuses to an end user in a really cool manner.\n',
      component: <UltimateButton>Click Me</UltimateButton>,
      href: '/playgrounds',
    },
  ];

  return { releasedComponents };
};
