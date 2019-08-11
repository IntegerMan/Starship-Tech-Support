import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';
import {CrewContext} from '../CrewContext';
import {CrewBehavior} from './CrewBehavior';

export class IdleBehavior extends CrewBehavior {

  evaluate(context: CrewContext): BehaviorResult<CrewContext> {
    context.addMessage(`${context.crewMember.fullName} idles`, `${context.crewMember.fullName} idles with nothing to do.`);

    return this.handled(context);
  }
}
