import React from 'react';
import { animated } from 'react-spring';
import { useBoop, UseBoopConfig } from '../../../hooks/useBoop';

export interface Props {
  boopConfig: UseBoopConfig;
}

/**
 *@function Boop
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Boop component
 */
const Boop: React.FunctionComponent<Props> = ({
  boopConfig,
  children,
}): JSX.Element => {
  const [style, trigger] = useBoop(boopConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
