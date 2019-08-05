import {GameState} from '../Models/GameState';
import {GameTime} from '../Models/GameTime';

export class GameSimulator {
  public static simulate(state: GameState): GameState {
    const newState = {... state};

    const elapsedTime = 5;
    newState.time = state.time.increment(elapsedTime);

    return newState;
  }}
