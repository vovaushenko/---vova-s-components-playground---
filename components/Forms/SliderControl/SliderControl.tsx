import React, { useState } from 'react';
import * as Styled from './SliderControl.styles';

export interface Props {
  name: string;
  setGlobalValue?: (val: string) => void;
  icon?: JSX.Element;
}

/**
 *Renders simple slider control component. Consists of wrapping container (div), label and input (range)
 *@function SliderControl
 *@param {string} name - name of input
 *@param {JSX.Element} icon - icon to be rendered before slider, @important - icon should have "icon" className to be have pre-defined styles. For instance <SomeIcon className="icon"/>
 *@returns {JSX.Element} - Rendered SliderControl component
 */
const SliderControl = ({ icon, name, setGlobalValue }: Props): JSX.Element => {
  const [rangeValue, setRangeValue] = useState('100');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(e.target.value);
    setGlobalValue && setGlobalValue(e.target.value);
  };

  return (
    <Styled.Container>
      <Styled.Label htmlFor={name}>{icon}</Styled.Label>
      <Styled.Input
        progress={rangeValue}
        type="range"
        min={'0'}
        max={'100'}
        value={rangeValue}
        name={name}
        onChange={handleChange}
      />
    </Styled.Container>
  );
};

export default SliderControl;
