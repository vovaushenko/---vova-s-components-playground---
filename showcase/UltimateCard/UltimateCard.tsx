import React from 'react';
import * as Styled from './UltimateCard.styles';

export type CardProps =
  | {
      variant: 'simple';
      url: string;
      title: string;
      imgSrc: string;
      description: string;
      isLoading: boolean;
      animationDelay?: never;
    }
  | {
      variant: 'animated';
      animationDelay: number;
      url: string;
      title: string;
      imgSrc: string;
      description: string;
      isLoading: boolean;
    };

/**
 *@function UltimateCard
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const UltimateCard = (props: CardProps): JSX.Element => {
  const { variant, imgSrc, title, description, url, isLoading } = props;

  return (
    <Styled.Container
      variant={variant}
      isLoading={isLoading}
      bgImg={imgSrc}
      cardGradientColor={'black'}
      animationDelay={props.animationDelay}
    >
      {isLoading ? (
        <>
          <Styled.SkeletonImg />
          <Styled.SkeletonText />
        </>
      ) : (
        <>
          <Styled.Figure>
            <Styled.Figcaption>
              <h3>{title}</h3>
              <p>{description}</p>
            </Styled.Figcaption>
          </Styled.Figure>

          <Styled.ExternalLink href={url} target="_blank" rel="noopener" />
        </>
      )}
    </Styled.Container>
  );
};

export default UltimateCard;
