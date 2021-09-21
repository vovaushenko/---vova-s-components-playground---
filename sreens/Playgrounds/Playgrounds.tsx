import React from 'react';
import * as Styled from './Playgrounds.styles';
import SimpleSwitch from '../../components/Switches/SimpleSwitch/SimpleSwitch';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <SimpleSwitch width={56} borderRadius={20} />
    </Styled.Container>
  );
};

export default Playgrounds;
