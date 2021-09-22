import React, { useState } from 'react';
import * as Styled from './Playgrounds.styles';
import 'react-calendar/dist/Calendar.css';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <Styled.Container>
      <div className="wrapper"></div>
    </Styled.Container>
  );
};

export default Playgrounds;
