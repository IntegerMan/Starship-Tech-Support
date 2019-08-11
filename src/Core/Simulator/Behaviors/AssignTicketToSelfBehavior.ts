import {CrewContext} from '../CrewContext';
import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';
import {CrewBehavior} from './CrewBehavior';

export class AssignTicketToSelfBehavior extends CrewBehavior {
  public evaluate(context: CrewContext): BehaviorResult<CrewContext> {
    const unassignedItems = context.state.openTickets.filter(t => t.assignedCrewId === 0);

    if (unassignedItems.length <= 0) {
      return this.unhandled(context);
    }

    const workItem = unassignedItems[0];
    workItem.assignedCrewId = context.crewMember.id;
    context.addMessage(`${context.crewMember.fullName} assigns ${workItem.title} to themself.`);

    return this.handled(context);
  }
}
