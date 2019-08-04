import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {TicketsState} from './TicketsState';

export const reset = createAction('Tickets/Reset');

const ticketsFeatureSelector = createFeatureSelector<TicketsState>('tickets');

export const getClosedTicketsCount = createSelector(ticketsFeatureSelector, (state: TicketsState) => state.closedCount);
export const getOpenTickets = createSelector(ticketsFeatureSelector, (state: TicketsState) => state.openTickets);

const initialState: TicketsState = {
  openTickets: ['Sample Ticket'],
  closedCount: 42
};

export const ticketsReducer = createReducer(initialState,
  on(reset, state => initialState),
);
