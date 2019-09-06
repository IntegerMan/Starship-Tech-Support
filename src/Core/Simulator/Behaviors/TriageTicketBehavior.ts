import {CrewContext} from '../CrewContext';
import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';
import {CrewBehavior} from './CrewBehavior';
import {WorkItemStatus} from '../../Models/WorkItems/WorkItemStatus';
import {Skill} from '../../Models/skill';

export class TriageTicketBehavior extends CrewBehavior {
  public evaluate(context: CrewContext): BehaviorResult<CrewContext> {
    // Ensure the user has the triage skill at or above the desired priority
    if (!this.crewHasSkillAtPriority(context,  Skill.triageWorkItem)) return;

    const items = context.state.openTickets.filter(t => t.assignedCrewId === context.crewMember.id && t.status === WorkItemStatus.new);

    if (items.length <= 0) {
      return this.unhandled(context);
    }

    const workItem = items[0];

    // TODO: It'd be good to have triage take a random degree of time / have a percentage chance of succeeding
    workItem.status = WorkItemStatus.readyForWork;
    context.addMessage(`${context.crewMember.fullName} triaged ${workItem.title}.`);

    return this.handled(context);
  }

}
