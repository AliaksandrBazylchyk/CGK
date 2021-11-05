import { createSelector } from 'reselect';
import { AppState } from '../reducers/rootReducer';

const getAccount = (state: AppState) => state.user;
const getPending = (state: AppState) => state.user.pending;
const getError = (state: AppState) => state.user.error;

export const getAccountSelector = createSelector(getAccount, (info) => info);
export const getAccountPendingSelector = createSelector(getPending, (pending) => pending);
export const getAccountErrorSelector = createSelector(getError, (error) => error);
