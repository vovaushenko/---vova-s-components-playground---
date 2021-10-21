import React from 'react';
import * as Styled from './ScrollHint.styles';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';

interface ScrollHintProps {
  hintText?: string;
}

/**
 *Renders scroll hit component to indicate user to scroll in down direction
 *@function ScrollHint
 *@returns {JSX.Element} - Rendered ScrollHint component
 */
const ScrollHint = ({ hintText }: ScrollHintProps): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        src={'/scroll-bar.svg'}
        height={50}
        width={50}
        objectFit={'contain'}
        alt={'Scroll down hint'}
        className={'scroll-hint'}
      />

      <p>{hintText ? hintText : 'Scroll down'}</p>
      <FiArrowDown className={'icon'} />
    </Styled.Container>
  );
};

export default ScrollHint;
