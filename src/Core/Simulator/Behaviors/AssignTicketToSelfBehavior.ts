import {BehaviorNode} from '../../BehaviorTree/BehaviorNode';
import {CrewContext} from '../CrewContext';
import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';

export class AssignTicketToSelfBehavior implements BehaviorNode<CrewContext> {
  public evaluate(context: CrewContext): BehaviorResult<CrewContext> {
    const unassignedItems = context.state.openTickets.filter(t => t.assignedCrewId === 0);

    if (unassignedItems.length <= 0) {
      return {
        context,
        selectedNode: null
      };
    }

    const workItem = unassignedItems[0];
    workItem.assignedCrewId = context.crewMember.id;
    context.addMessage(`${context.crewMember.fullName} assigns ${workItem.title} to themself.`);

    return {
      context,
      selectedNode: this
    };
  }
}
