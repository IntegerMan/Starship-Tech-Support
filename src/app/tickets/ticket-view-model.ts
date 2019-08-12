import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';
import {GameState} from '../../Core/Models/GameState';
import {CrewMember} from '../../Core/Models/crew/CrewMember';
import {WorkItemStatus} from '../../Core/Models/WorkItems/WorkItemStatus';
import {Department} from '../../Core/Models/Department';

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

  public get department(): Department {
    return this.ticket.responsibleDepartment;
  }

  public get status(): WorkItemStatus {
    return this.ticket.status;
  }

  public get statusText(): string {
    switch (this.status) {
      case WorkItemStatus.new:
        return 'New';
      case WorkItemStatus.readyForWork:
        return 'Ready';
      case WorkItemStatus.inProgress:
        return 'In Progress';
      case WorkItemStatus.readyForReview:
        return 'Ready for Review';
      case WorkItemStatus.readyForTesting:
        return 'Ready for Testing';
      case WorkItemStatus.readyForRelease:
        return 'Ready for Release';
      case WorkItemStatus.released:
        return 'Released';
      default:
        throw Error('Unknown status code in statusText: ' + this.ticket.status);
    }
  }

}
