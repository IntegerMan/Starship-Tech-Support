import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';
import {CrewContext} from '../CrewContext';
import {CrewBehavior} from './CrewBehavior';

export class IdleBehavior extends CrewBehavior {

  evaluate(context: CrewContext): BehaviorResult<CrewContext> {
    // This is hard-wired as a level 1 priority, so it only reacts at the end of evaluation
    if (context.priority > 1) return;

    context.addMessage(`${context.crewMember.fullName} idles`, `${context.crewMember.fullName} idles with nothing to do.`);

    return this.handled(context);
  }
}
