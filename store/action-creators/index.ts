import { UiActionCreators } from '../reducers/ui/ui-action-creators';

/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UiActionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;
