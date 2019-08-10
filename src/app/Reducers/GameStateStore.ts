import {createFeatureSelector, createSelector, Store} from '@ngrx/store';
import {GameState} from '../../Core/Models/GameState';
import {CrewMember} from '../../Core/Models/crew/CrewMember';
import {DisplayableWorkItem} from '../../Core/Models/WorkItems/displayable-work.item';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';

const gameSelector = createFeatureSelector<GameState>('game');

export class GameStateStore extends Store<GameState> {
  public readonly getClosedTicketsCount = createSelector(gameSelector, (state: GameState) => state.closedCount);
  public readonly getCrewMembers = createSelector(gameSelector, (state: GameState) => state.crew);

  public readonly getOpenTickets = createSelector(gameSelector, this.getCrewMembers, (state: GameState, crew: CrewMember[]) =>
    state.openTickets.map((t: WorkItem): DisplayableWorkItem => {
      let crewMember: CrewMember = null;
      if (t.assignedCrewId) {
        crewMember = crew.find(c => c.id === t.assignedCrewId);
      }

      const displayItem: DisplayableWorkItem = {
        assignedCrewId: t.assignedCrewId,
        assignedCrewName: crewMember ? crewMember.fullName : '',
        id: t.id,
        title: t.title,
        systemId: t.systemId,
        type: t.type
      }
      return displayItem;
  }));

  public readonly getTime = createSelector(gameSelector, (state: GameState) => state.time.text);
  public readonly getUpdates = createSelector(gameSelector, (state: GameState) => state.messages);
}

