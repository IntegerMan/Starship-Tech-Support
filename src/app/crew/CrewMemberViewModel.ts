import {GameState} from '../../Core/Models/GameState';
import {CrewMember} from '../../Core/Models/crew/CrewMember';
import {Department} from '../../Core/Models/Department';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';
import {TicketViewModel} from '../tickets/ticket-view-model';

export class CrewMemberViewModel {

  public constructor (private crewMember: CrewMember, private state: GameState) {
    this.assignedTickets = state.openTickets.filter(t => t.assignedCrewId && t.assignedCrewId === crewMember.id);
  }

  public readonly assignedTickets: WorkItem[];

  public get hasAssignedTickets(): boolean {
    return this.assignedTickets.length > 0;
  }

  public get department(): Department {
    return this.crewMember.department;
  }

  public get id(): string {
    return this.crewMember.id.toString();
  }

  public get fullName(): string {
    return this.crewMember.fullName;
  }

}
