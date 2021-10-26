import React from 'react';
import * as Styled from './Playgrounds.styles';
import UltimateButtonPage from '../ReleasedComponents/UltimateButtonPage/UltimateButtonPage';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */

const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <UltimateButtonPage />
    </Styled.Container>
  );
};

export default Playgrounds;
