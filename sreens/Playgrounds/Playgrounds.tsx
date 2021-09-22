import React from 'react';
import { FiSun, FiVolume2 } from 'react-icons/fi';
import SliderControl from '../../components/Forms/SliderControl/SliderControl';
import * as Styled from './Playgrounds.styles';
import Sparkles from '../../components/UI/Sparkles/WithSparkles';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <Sparkles color={'yellow'}>
        <SliderControl
          icon={<FiSun className="icon" />}
          name="brightness-control"
        />
      </Sparkles>
      <SliderControl
        icon={<FiVolume2 className="icon" />}
        name="brightness-control"
      />
      <SliderControl name="brightness-control" />
    </Styled.Container>
  );
};

export default Playgrounds;
