import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Carousel.styles';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import useHover from '../../../../hooks/useHover';
import IconButton from '../../../Buttons/IconButton/IconButton';
import Boop from '../../../Animations/Boop/Boop';

export interface CarouselImage {
  href: string;
}

export interface Props {
  images: CarouselImage[];
}

/**
 *Renders image carousel for CarouselCard component.
 *@function Carousel
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Carousel = ({ images }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageId, setImageId] = useState<number>(0);
  const [displayedImg, setDisplayedImg] = useState<CarouselImage>(
    images[imageId]
  );
  const isHovered = useHover(containerRef);

  const swipeToNextImage = () => {
    let nextId = imageId + 1;
    if (nextId >= images.length) nextId = images.length - 1;
    setImageId(nextId);
  };
  const swipeToPrevImage = () => {
    let nextId = imageId - 1;
    if (nextId < 0) nextId = 0;
    setImageId(nextId);
  };

  useEffect(() => {
    setDisplayedImg(images[imageId]);
  }, [imageId]);

  const isLeftControlShown = isHovered && imageId !== 0;
  const isRightControlShown = isHovered && imageId !== images.length - 1;

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Header>
        <Styled.Badge>superhost</Styled.Badge>

        <Boop boopConfig={{ rotation: 15 }}>
          <IconButton renderAs={'button'}>
            <FiHeart className="button__icon" />
          </IconButton>
        </Boop>
      </Styled.Header>

      <Styled.AnimatedImage key={imageId}>
        <Image
          src={displayedImg.href}
          height={300}
          width={400}
          alt="..."
          className={'carousel__image'}
        />
      </Styled.AnimatedImage>
      <Boop boopConfig={{ x: 3 }}>
        <Styled.SwipeForward
          onClick={swipeToNextImage}
          isOnScreen={isRightControlShown}
        >
          <FiChevronRight className={'chevron__icon'} />
        </Styled.SwipeForward>
      </Boop>

      <Styled.SwipeBack
        onClick={swipeToPrevImage}
        isOnScreen={isLeftControlShown}
      >
        <FiChevronLeft className={'chevron__icon'} />
      </Styled.SwipeBack>
    </Styled.Container>
  );
};

export default Carousel;
