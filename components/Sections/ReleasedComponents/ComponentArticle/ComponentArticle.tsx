import React, { useRef } from 'react';
import * as Styled from './ComponentArticle.styles';
import { IComponentArticle } from '../../../../models/IComponentArticle';
import Heading from '../../../Typography/Heading/Heading';
import Paragraph from '../../../Typography/Paragraph/Paragraph';
import Boop from '../../../Animations/Boop/Boop';
import { FiCode, FiEye, FiGithub } from 'react-icons/fi';
import useHover from '../../../../hooks/useHover';
import IconButton from '../../../Buttons/IconButton/IconButton';

export interface ComponentArticleProps {
  component: IComponentArticle;
  withDescription: boolean;
}

/**
 *Renders article with the information about recently released components
 *@function ComponentArticle
 *@param {IComponentArticle} object - contains full info about article
 *@param {withDescription} boolean - specifies whether description should be added
 *@returns {JSX.Element} - Rendered ComponentArticle component
 */
const ComponentArticle = ({
  component,
  withDescription,
}: ComponentArticleProps): JSX.Element => {
  const articleRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(articleRef);
  const {
    component: articleComponent,
    description,
    title,
    href,
    gitHubLink,
    openSourceCode,
  } = component;

  return (
    <Styled.Container
      ref={articleRef}
      isHovered={isHovered}
      withDescription={withDescription}
    >
      {/* LINKS COLUMN */}
      <Styled.LinksColumn>
        <Boop boopConfig={{ rotation: -25, scale: 1.1, timing: 200 }}>
          <IconButton renderAs={'link'} href={gitHubLink}>
            <FiGithub className="button__icon" />
          </IconButton>
        </Boop>
        <Boop boopConfig={{ rotation: -25, scale: 1.1, timing: 200 }}>
          <IconButton renderAs={'routerLink'} href={href}>
            <FiEye className="button__icon" />
          </IconButton>
        </Boop>
        <Boop boopConfig={{ rotation: -25, scale: 1.1, timing: 200 }}>
          <IconButton renderAs={'button'} onClick={openSourceCode}>
            <FiCode className="button__icon" />
          </IconButton>
        </Boop>
      </Styled.LinksColumn>
      {/* ========  END OF LINKS COLUMN ======== */}

      {/* TEXT COLUMN */}
      <Styled.TextColumn>
        <Heading>{title}</Heading>
        {withDescription && (
          <Paragraph margin={'1.5rem 0 0 0'}>{description}</Paragraph>
        )}
      </Styled.TextColumn>
      {/* ========  END OF TEXT COLUMN ======== */}

      {/* COMPONENT COLUMN */}
      <Styled.ComponentColumn>
        <Styled.WithLevitation>
          <Boop boopConfig={{ scale: 1.1 }}>{articleComponent}</Boop>
        </Styled.WithLevitation>
      </Styled.ComponentColumn>
      {/* ========  END OF COMPONENT COLUMN ======== */}
    </Styled.Container>
  );
};

export default ComponentArticle;
