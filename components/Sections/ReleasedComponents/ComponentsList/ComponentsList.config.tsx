import { IComponentArticle } from '../../../../models/IComponentArticle';
import UltimateButton from '../../../../showcase/UltimateButton/UltimateButton';
import { useActions } from '../../../../hooks/useActions';
import UltimateButtonGitHub from '../../../Iframes/GitHubExamples/UltimateButtonGitHub/UltimateButtonGitHub';
import { useCallback } from 'react';

export const useComponentsListConfig = (): {
  releasedComponents: IComponentArticle[];
} => {
  const { openModal } = useActions();

  const openUltimateButtonSourceCode = useCallback(() => {
    openModal({
      id: 'ultimate-button',
      height: '90vh',
      width: '90vw',
      content: <UltimateButtonGitHub />,
    });
  }, [openModal]);

  const releasedComponents: IComponentArticle[] = [
    {
      id: 1,
      title: 'Ultimate Button',
      description:
        'Today we will be busy building the ULTIMATE button. I’m joking of course. We will build the first part of our small library of reusable components - a button that is ready for the modern challenges. Button that will have a number of different statuses and that is capable of displaying these statuses to an end user in a really cool manner.\n',
      component: <UltimateButton>Click Me</UltimateButton>,
      href: '/components/ultimate-button',
      gitHubLink:
        'https://github.com/vovaushenko/my-components-playground/tree/master/showcase/UltimateButton',
      openSourceCode: () => openUltimateButtonSourceCode(),
    },
  ];

  return { releasedComponents };
};
