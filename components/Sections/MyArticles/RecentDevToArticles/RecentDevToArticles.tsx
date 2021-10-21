import React from 'react';
import * as Styled from './RecentDevToArticles.styles';
import { IDevToArticle } from '../../../../models/IDevToArticle';
import ArticleCard from '../ArticleCard/ArticleCard';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';

interface RecentDevToArticlesProps {
  devToArticles: IDevToArticle[];
}

/**
 *Renders section with most recent dev-to articles
 *@function RecentDevToArticles
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered RecentDevToArticles component
 */
const RecentDevToArticles = ({
  devToArticles,
}: RecentDevToArticlesProps): JSX.Element => {
  return (
    <Styled.Container>
      <SectionHeader variant={'l'}>Most recent articles</SectionHeader>
      {devToArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Styled.Container>
  );
};

export default RecentDevToArticles;
