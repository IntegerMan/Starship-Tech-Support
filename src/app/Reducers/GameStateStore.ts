import {createFeatureSelector, createSelector, Store} from '@ngrx/store';
import {GameState} from '../../Core/Models/GameState';
import {TicketViewModel} from '../tickets/ticket-view-model';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';
import {CrewMemberViewModel} from '../crew/CrewMemberViewModel';

const gameSelector = createFeatureSelector<GameState>('game');

export class GameStateStore extends Store<GameState> {

  public readonly getClosedTicketsCount = createSelector(gameSelector, (state: GameState) => state.closedCount);

  public readonly getCrewMembers = createSelector(gameSelector, (state: GameState) =>
    state.crew.map(c => new CrewMemberViewModel(c, state)));

  public readonly getTime = createSelector(gameSelector, (state: GameState) => state.time.text);
  public readonly getUpdates = createSelector(gameSelector, (state: GameState) => state.messages);
  public readonly getSystems = createSelector(gameSelector, (state: GameState) => state.systems);

  public readonly getCrewMemberById = (id: number) => createSelector(gameSelector, (state: GameState) => {
    const crew = state.crew.find(c => c.id === id);

    return new CrewMemberViewModel(crew, state)
  });

  public readonly getTicketById = (id: number) => createSelector(gameSelector, (state: GameState) => {
    const workItem = state.openTickets.find(t => t.id === id);

    return new TicketViewModel(workItem, state)
  });

  public readonly getOpenTickets = createSelector(gameSelector, (state: GameState) =>
    state.openTickets.map((t: WorkItem): TicketViewModel => new TicketViewModel(t, state)));
}

