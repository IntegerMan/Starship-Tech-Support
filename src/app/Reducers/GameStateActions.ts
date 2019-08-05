import {createAction, props} from '@ngrx/store';
import {Ticket} from '../../Core/Models/Ticket';
import {GameState} from '../../Core/Models/GameState';
import {GameTime} from '../../Core/Models/GameTime';

export const resetAction = createAction('Reset');
export const closeTicketAction = createAction('Tickets/Close', props<Ticket>());
export const beginShiftAction = createAction('Begin Shift');

export function buildDefaultState(): GameState {
  return {
    openTickets: [
      new Ticket('Sample Ticket')
    ],
    closedCount: 0,
    time: new GameTime(8, 4, 2422, 3, 20)
  };
}
