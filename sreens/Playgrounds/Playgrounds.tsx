import React from 'react';
import NextImage from '../../components/Image/NextImage';
import * as Styled from './Playgrounds.styles';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <NextImage variant="card-image" />
    </Styled.Container>
  );
};

export default Playgrounds;
