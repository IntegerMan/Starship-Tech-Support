import {createReducer, on} from '@ngrx/store';
import {beginShiftAction, resetAction} from './GameStateActions';
import {GameSimulator} from '../../Core/Simulator/GameSimulator';

export const gameStateReducer = createReducer(GameSimulator.buildDefaultState(),
  on(resetAction, () => GameSimulator.buildDefaultState()),
  on(beginShiftAction, state => GameSimulator.simulate(state, 1)),
);
