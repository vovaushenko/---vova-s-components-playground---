import { ReactNode } from 'react';

export interface IComponentArticle {
  id: number;
  title: string;
  description: string;
  href: string;
  component: ReactNode;
  gitHubLink: string;
  gitHub1sLink: string;
}
