import React from 'react';
import * as Styled from './ScrollHint.styles';
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
      <Styled.SVG
        viewBox="0 0 52 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.6056 63.1025V25.8975C47.6056 14.0121 37.9325 4.37705 26 4.37705C14.0675 4.37705 4.39437 14.0121 4.39437 25.8975V63.1025C4.39437 74.9879 14.0675 84.623 26 84.623C37.9325 84.623 47.6056 74.9879 47.6056 63.1025ZM26 0C11.6406 0 0 11.5947 0 25.8975V63.1025C0 77.4053 11.6406 89 26 89C40.3594 89 52 77.4053 52 63.1025V25.8975C52 11.5947 40.3594 0 26 0Z"
          fill="white"
        />
        <path
          d="M23 34.5526C23 32.5906 24.567 31 26.5 31C28.433 31 30 32.5906 30 34.5526V54.4474C30 56.4094 28.433 58 26.5 58C24.567 58 23 56.4094 23 54.4474V34.5526Z"
          fill="white"
        />
      </Styled.SVG>

      <p>{hintText ? hintText : 'Scroll down'}</p>
      <FiArrowDown className={'icon'} />
    </Styled.Container>
  );
};

export default ScrollHint;
