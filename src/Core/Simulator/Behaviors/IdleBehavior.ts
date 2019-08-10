import {BehaviorNode} from '../../BehaviorTree/BehaviorNode';
import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';
import {CrewContext} from '../CrewContext';

export class IdleBehavior implements BehaviorNode<CrewContext> {

  evaluate(context: CrewContext): BehaviorResult<CrewContext> {
    context.addMessage(context.crewMember.fullName + ' idles', context.crewMember.fullName + ' idles with nothing to do.');

    return {
      context,
      selectedNode: this
    };
  }
}
