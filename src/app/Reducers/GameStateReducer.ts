import {createReducer, on} from '@ngrx/store';
import {GameState} from './GameState';
import {Ticket} from '../tickets/Ticket';
import {ArrayHelpers} from '../helpers/ArrayHelpers';
import {beginShiftAction, buildDefaultState, closeTicketAction, resetAction} from './GameStateActions';
import {GameSimulator} from '../../simulator/GameSimulator';

const initialState: GameState = buildDefaultState();

export const gameStateReducer = createReducer(initialState,
  on(resetAction, () => buildDefaultState()),
  on(closeTicketAction, (state, ticket: Ticket) => ({
    ...state,
    closedCount: state.closedCount + 1,
    openTickets: ArrayHelpers.removeElement(state.openTickets, ticket, t => t.title === ticket.title)
  })),
  on(beginShiftAction, state => GameSimulator.simulate(state))
);
