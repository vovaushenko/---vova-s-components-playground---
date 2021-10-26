import React from 'react';
import * as Styled from './ComponentsList.styles';
import { IComponentArticle } from '../../../../models/IComponentArticle';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import ComponentArticle from '../ComponentArticle/ComponentArticle';

export interface ComponentsListProps {
  releasedComponents: IComponentArticle[];
  withFullArticleDescription: boolean;
}

/**
 *Renders list of currently released components
 *@function ComponentsList
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ComponentsList component
 */
const ComponentsList = ({
  releasedComponents,
  withFullArticleDescription,
}: ComponentsListProps): JSX.Element => {
  return (
    <Styled.Container>
      <SectionHeader variant={'l'}>Released Components</SectionHeader>
      {releasedComponents.map((component) => (
        <ComponentArticle
          key={component.id}
          component={component}
          withDescription={withFullArticleDescription}
        />
      ))}
    </Styled.Container>
  );
};
export default ComponentsList;
