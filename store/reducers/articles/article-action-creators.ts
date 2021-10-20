import {
  ArticleActionTypes,
  SetDevToArticles,
  SetErrorAction,
  SetLoadingAction,
} from './types';
import { NextThunkDispatch } from '../../index';
import { fetcher } from '../../../http-client';
import { IDevToArticle } from '../../../models/IDevToArticle';

export const ArticleActionCreators = {
  setIsLoading: (loadingState: boolean): SetLoadingAction => ({
    type: ArticleActionTypes.SET_IS_LOADING,
    payload: loadingState,
  }),
  setError: (error: string): SetErrorAction => ({
    type: ArticleActionTypes.SET_ERROR,
    payload: error,
  }),

  setDevToArticles: (articles: IDevToArticle[]): SetDevToArticles => ({
    type: ArticleActionTypes.SET_DEV_TO_ARTICLES,
    payload: articles,
  }),

  getAllDevToArticles: () => async (dispatch: NextThunkDispatch) => {
    dispatch(ArticleActionCreators.setIsLoading(true));
    try {
      const allDevToArticles = await fetcher<IDevToArticle[]>({
        url: 'https://dev.to/api/articles/me/published',
        method: 'GET',
        headers: {
          'api-key': process.env.DEV_TO_API_KEY,
        },
      });
      dispatch(ArticleActionCreators.setDevToArticles(allDevToArticles));
    } catch (e) {
      dispatch(ArticleActionCreators.setError(JSON.stringify(e)));
    }
  },
};
