import {createReducer, on} from '@ngrx/store';
import {ArrayHelpers} from '../../helpers/ArrayHelpers';
import {beginShiftAction, closeTicketAction, resetAction} from './GameStateActions';
import {GameSimulator} from '../../Core/simulator/GameSimulator';

export const gameStateReducer = createReducer(GameSimulator.buildDefaultState(),
  on(resetAction, () => GameSimulator.buildDefaultState()),
  on(beginShiftAction, state => GameSimulator.simulate(state)),
  on(closeTicketAction, (state, {workItem}) => ({
    ...state,
    closedCount: state.closedCount + 1,
    openTickets: ArrayHelpers.removeElement(state.openTickets, workItem, t => t.title === workItem.title)
  })),
);
