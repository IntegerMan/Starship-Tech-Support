import {GameState} from '../app/Reducers/GameState';
import {GameTime} from '../app/Reducers/GameTime';

export class GameSimulator {
  public static simulate(state: GameState): GameState {
    const newState = {... state};

    newState.time = state.time.increment(5);
    newState.closedCount++;

    return newState;
  }}
