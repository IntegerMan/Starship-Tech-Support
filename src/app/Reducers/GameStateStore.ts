import {createFeatureSelector, createSelector, Store} from '@ngrx/store';
import {GameState} from '../../Core/Models/GameState';
import {TicketViewModel} from '../tickets/ticket-view-model';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';

const gameSelector = createFeatureSelector<GameState>('game');

export class GameStateStore extends Store<GameState> {
  public readonly getClosedTicketsCount = createSelector(gameSelector, (state: GameState) => state.closedCount);
  public readonly getCrewMembers = createSelector(gameSelector, (state: GameState) => state.crew);
  public readonly getTime = createSelector(gameSelector, (state: GameState) => state.time.text);
  public readonly getUpdates = createSelector(gameSelector, (state: GameState) => state.messages);
  public readonly getSystems = createSelector(gameSelector, (state: GameState) => state.systems);

  public readonly getOpenTickets = createSelector(gameSelector, (state: GameState) =>
    state.openTickets.map((t: WorkItem): TicketViewModel => new TicketViewModel(t, state)));
}

