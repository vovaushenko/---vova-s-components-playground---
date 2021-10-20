import { IDevToArticle } from '../../../models/IDevToArticle';

export interface ArticleState {
  devToArticles: IDevToArticle[];
  isLoading: boolean;
  error: null | string;
}

export enum ArticleActionTypes {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_DEV_TO_ARTICLES = 'SET_DEV_TO_ARTICLES',
  SET_ERROR = 'SET_ERROR',
}

export interface SetDevToArticles {
  type: ArticleActionTypes.SET_DEV_TO_ARTICLES;
  payload: IDevToArticle[];
}

export type SetLoadingAction = {
  type: ArticleActionTypes.SET_IS_LOADING;
  payload: boolean;
};

export type SetErrorAction = {
  type: ArticleActionTypes.SET_ERROR;
  payload: string;
};

export type ArticleAction =
  | SetDevToArticles
  | SetLoadingAction
  | SetErrorAction;
