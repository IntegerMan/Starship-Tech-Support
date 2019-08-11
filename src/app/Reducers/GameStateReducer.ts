import {Action, createReducer, on, State} from '@ngrx/store';
import {beginShiftAction, resetAction} from './GameStateActions';
import {GameSimulator} from '../../Core/Simulator/GameSimulator';

const gameReducer = createReducer(GameSimulator.buildDefaultState(),
  on(resetAction, () => GameSimulator.buildDefaultState()),
  on(beginShiftAction, state => GameSimulator.simulate(state, 1)),
);

export function gameStateReducer(state: any, action: Action) {
  return gameReducer(state, action);
}
