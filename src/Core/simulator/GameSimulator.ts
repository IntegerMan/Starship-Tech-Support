import {GameState} from '../Models/GameState';
import {GameTime} from '../Models/GameTime';
import {WorkItem} from '../Models/WorkItem';
import {WorkItemType} from '../Models/WorkItemType';

export class GameSimulator {
  public static simulate(state: GameState): GameState {
    const newState = {... state};

    const elapsedTime = 5;
    newState.time = state.time.increment(elapsedTime);

    return newState;
  }

  public static buildDefaultState(): GameState {
    return {
      openTickets: [
        new WorkItem('The Web Site is Down', 1, WorkItemType.incident, 1)
      ],
      closedCount: 0,
      time: new GameTime(8, 4, 2422, 3, 20),
      crew: [],
      systems: []
    };

  }
}
