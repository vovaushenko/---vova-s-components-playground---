import React from 'react';
import * as Styled from './ComponentsList.styles';
import { IComponentArticle } from '../../../../models/IComponentArticle';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';

export interface ComponentsListProps {
  releasedComponents: IComponentArticle[];
}

/**
 *Renders list of currently released components
 *@function ComponentsList
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ComponentsList component
 */
const ComponentsList = ({
  releasedComponents,
}: ComponentsListProps): JSX.Element => {
  return (
    <Styled.Container>
      <SectionHeader variant={'l'}>Released Components</SectionHeader>
      {releasedComponents.map((component) => (
        <>
          <h3>{component.title}</h3>
          <p>{component.description}</p>
          <Styled.LevitatingWrapper>
            {component.component}
          </Styled.LevitatingWrapper>
        </>
      ))}
    </Styled.Container>
  );
};
export default ComponentsList;
