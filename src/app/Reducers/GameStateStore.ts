import {createFeatureSelector, createSelector, Store} from '@ngrx/store';
import {GameState} from '../../Core/Models/GameState';

const gameSelector = createFeatureSelector<GameState>('game');

export class GameStateStore extends Store<GameState> {
  public readonly getClosedTicketsCount = createSelector(gameSelector, (state: GameState) => state.closedCount);
  public readonly getOpenTickets = createSelector(gameSelector, (state: GameState) => state.openTickets);
  public readonly getTime = createSelector(gameSelector, (state: GameState) => state.time.text);
}

