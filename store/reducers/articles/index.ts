import { ArticleAction, ArticleActionTypes, ArticleState } from './types';

/**
 *@object initialArticleState
 *represents initial state of article reducer
 */
const initialArticleState: ArticleState = {
  devToArticles: [],
  isLoading: false,
  error: null,
};

/**
 *@function articleReducer
 *@param {ArticleState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */
const articleReducer = (
  state = initialArticleState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case ArticleActionTypes.SET_DEV_TO_ARTICLES:
      return { ...state, devToArticles: action.payload };

    case ArticleActionTypes.SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default articleReducer;
