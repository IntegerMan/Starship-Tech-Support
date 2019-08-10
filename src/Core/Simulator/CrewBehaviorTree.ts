import {BehaviorTree} from '../BehaviorTree/BehaviorTree';
import {BehaviorSequence} from '../BehaviorTree/BehaviorSequence';
import {CrewContext} from './CrewContext';
import {IdleBehavior} from './Behaviors/IdleBehavior';
import {AssignTicketToSelfBehavior} from './Behaviors/AssignTicketToSelfBehavior';

export class CrewBehaviorTree extends BehaviorTree<CrewContext> {
  constructor() {
    super();

    this.child = new BehaviorSequence<CrewContext>([
      new AssignTicketToSelfBehavior(),
      new IdleBehavior()
    ]);
  }
}
