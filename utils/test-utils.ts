import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducer, RootState } from '../store';

/**
 * Create a testing store with imported reducers, middleware, and initial state
 *@param {object} initialState - Initial store for store
 *@function storeFactory
 *@returns {Store} - Redux store
 */
export const storeFactory = (
  initialState: RootState
): Store<RootState, AnyAction> => {
  const middlewares = [thunk];
  return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
