import React from 'react';
import * as Styled from './Playgrounds.styles';
import GenericButton from '../../components/Buttons/GenericButton/GenericButton';
import WithSparkles from '../../components/UI/Sparkles/WithSparkles';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <WithSparkles color={'yellow'}>
        <GenericButton>CLICK</GenericButton>
      </WithSparkles>
    </Styled.Container>
  );
};

export default Playgrounds;
