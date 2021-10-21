import React, { useRef } from 'react';
import * as Styled from './ComponentArticle.styles';
import { IComponentArticle } from '../../../../models/IComponentArticle';
import Link from 'next/link';
import Heading from '../../../Typography/Heading/Heading';
import Paragraph from '../../../Typography/Paragraph/Paragraph';
import Boop from '../../../Animations/Boop/Boop';
import { FiChevronsRight, FiEye, FiGithub } from 'react-icons/fi';
import useHover from '../../../../hooks/useHover';
import IconButton from '../../../Buttons/IconButton/IconButton';

export interface ComponentArticleProps {
  component: IComponentArticle;
}

/**
 *Renders article with the information about recently released components
 *@function ComponentArticle
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ComponentArticle component
 */
const ComponentArticle = ({
  component,
}: ComponentArticleProps): JSX.Element => {
  const articleRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(articleRef);
  const { component: articleComponent, description, title, href } = component;

  return (
    <Styled.Container ref={articleRef} isHovered={isHovered}>
      <Styled.LinksColumn>
        <IconButton
          renderAs={'link'}
          href={'https://react-icons.github.io/react-icons/icons?name=fi'}
        >
          <FiGithub className="button__icon" />
        </IconButton>
        <IconButton
          renderAs={'link'}
          href={'https://react-icons.github.io/react-icons/icons?name=fi'}
        >
          <FiEye className="button__icon" />
        </IconButton>
        <IconButton
          renderAs={'link'}
          href={'https://react-icons.github.io/react-icons/icons?name=fi'}
        >
          <FiGithub className="button__icon" />
        </IconButton>
      </Styled.LinksColumn>
      <Styled.TextColumn>
        <Heading>{title}</Heading>
        <Paragraph margin={'1.5rem 0 0 0'}>{description}</Paragraph>

        <Styled.LinksWrapper>
          <Link href={href}>
            <Styled.A>
              Read More
              {isHovered && (
                <Styled.ArrowIcon>
                  <FiChevronsRight className={'icon'} />
                </Styled.ArrowIcon>
              )}
            </Styled.A>
          </Link>
        </Styled.LinksWrapper>
      </Styled.TextColumn>

      <Styled.ComponentColumn>
        <Styled.WithLevitation>
          <Boop boopConfig={{ scale: 1.1 }}>{articleComponent}</Boop>
        </Styled.WithLevitation>
      </Styled.ComponentColumn>
    </Styled.Container>
  );
};

export default ComponentArticle;
