import React from 'react';
import * as Styled from './Playgrounds.styles';
import UltimateCard from '../../showcase/UltimateCard/UltimateCard';
import styled from 'styled-components';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */

const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <GridWrapper>
        <UltimateCard
          isLoading={true}
          url={'https://github.com/'}
          title={'Beautiful views of Toronto'}
          description={
            'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip'
          }
          imgSrc={'/ultimate-cart/2.jpg'}
          animationDelay={500}
        />{' '}
        <UltimateCard
          isLoading={true}
          url={'https://github.com/'}
          title={'Beautiful views of Toronto'}
          description={
            'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip'
          }
          imgSrc={'/ultimate-cart/2.jpg'}
          animationDelay={1000}
        />{' '}
        <UltimateCard
          isLoading={true}
          url={'https://github.com/'}
          title={'Beautiful views of Toronto'}
          description={
            'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip'
          }
          imgSrc={'/ultimate-cart/1.jpg'}
          animationDelay={1500}
        />
      </GridWrapper>
    </Styled.Container>
  );
};

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export default Playgrounds;
