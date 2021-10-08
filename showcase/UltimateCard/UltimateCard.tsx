import React from 'react';
import * as Styled from './UltimateCard.styles';

export interface Props {
  url: string;
  title: string;
  imgSrc: string;
  description: string;
  animationDelay: number;
  isLoading: boolean;
}

/**
 *@function UltimateCard
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const UltimateCard = ({
  url,
  imgSrc,
  title,
  description,
  animationDelay,
  isLoading,
}: Props): JSX.Element => {
  return (
    <Styled.Container
      isLoading={isLoading}
      bgImg={imgSrc}
      cardGradientColor={'black'}
      animationDelay={animationDelay}
    >
      <Styled.Figure>
        <Styled.Figcaption>
          <h3>{title}</h3>
          <p>{description}</p>
        </Styled.Figcaption>
      </Styled.Figure>

      <Styled.ExternalLink href={url} target="_blank" rel="noopener" />
    </Styled.Container>
  );
};

export default UltimateCard;
