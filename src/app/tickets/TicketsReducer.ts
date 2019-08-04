import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';
import {TicketsState} from './TicketsState';
import {Ticket} from './Ticket';
import {ArrayHelpers} from '../ArrayHelpers';

export const resetAction = createAction('Tickets/Reset');
export const closeTicketAction = createAction('Tickets/Delete', props<Ticket>());

const ticketsFeatureSelector = createFeatureSelector<TicketsState>('tickets');

export const getClosedTicketsCount = createSelector(ticketsFeatureSelector, (state: TicketsState) => state.closedCount);
export const getOpenTickets = createSelector(ticketsFeatureSelector, (state: TicketsState) => state.openTickets);

const initialState: TicketsState = {
  openTickets: [ new Ticket('Sample Ticket')],
  closedCount: 42
};

export const ticketsReducer = createReducer(initialState,
  on(resetAction, () => ({
    openTickets: [],
    closedCount: 0
  })),
  on(closeTicketAction, (state, ticket: Ticket) => ({
    ...initialState,
    closedCount: state.closedCount + 1,
    openTickets: ArrayHelpers.removeElement(initialState.openTickets, ticket, t => t.title === ticket.title)
  })),
);
