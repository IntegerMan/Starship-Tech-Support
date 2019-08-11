import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';
import {GameState} from '../../Core/Models/GameState';
import {CrewMember} from '../../Core/Models/crew/CrewMember';

export class TicketViewModel {

  public constructor (private ticket: WorkItem, private state: GameState) {
    this.assignedCrew = state.crew.find(c => c.id && c.id === ticket.assignedCrewId);
  }

  private readonly assignedCrew: CrewMember | null;

  public get assignmentText(): string {
    return this.assignedCrew
      ? `Assigned to ${this.assignedCrew.fullName}`
      : 'Unassigned';
  }

  public get id(): string {
    return this.ticket.id.toString();
  }

  public get title(): string {
    return this.ticket.title;
  }
}
