import {createAction, createReducer, on} from '@ngrx/store';
import {TicketsState} from './TicketsState';

export const reset = createAction('Tickets/Reset');

const initialState = 42;
/* {
  openTickets: ['Sample Ticket'],
  closedCount: 42
}; */

export const ticketsReducer = createReducer(initialState,
  on(reset, state => 42),
);
