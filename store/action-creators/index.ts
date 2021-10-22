import { UiActionCreators } from '../reducers/ui/ui-action-creators';
import { ArticleActionCreators } from '../reducers/articles/article-action-creators';
import { ModalActionCreators } from '../reducers/modals/modal-action-creators';

/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UiActionCreators,
  ...ArticleActionCreators,
  ...ModalActionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;
