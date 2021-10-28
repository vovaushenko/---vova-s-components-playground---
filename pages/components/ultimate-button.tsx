import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import UltimateButtonPage from '../../sreens/ReleasedComponents/UltimateButtonPage/UltimateButtonPage';
import { NextThunkDispatch, wrapper } from '../../store';
import { ArticleActionCreators } from '../../store/reducers/articles/article-action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(ArticleActionCreators.getAllDevToArticles());

    return {
      props: {
        title: 'ultimate | button',
      },
      revalidate: 3600,
    };
  }
);

const UltimateButtonNextPage: NextPage = () => {
  return (
    <PageLayout>
      <UltimateButtonPage />
    </PageLayout>
  );
};

const mapDispatchToProps = (dispatch: NextThunkDispatch) => {
  return {
    news: bindActionCreators(
      ArticleActionCreators.getAllDevToArticles,
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(UltimateButtonNextPage);
