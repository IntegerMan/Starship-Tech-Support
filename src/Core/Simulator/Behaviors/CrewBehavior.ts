import {BehaviorNode} from '../../BehaviorTree/BehaviorNode';
import {CrewContext} from '../CrewContext';
import {BehaviorResult} from '../../BehaviorTree/BehaviorResult';

export abstract class CrewBehavior implements BehaviorNode<CrewContext> {
  public abstract evaluate(context: CrewContext): BehaviorResult<CrewContext>;

  protected handled(context: CrewContext): BehaviorResult<CrewContext> {
    return {
      context,
      selectedNode: this
    };
  }

  protected unhandled(context: CrewContext): BehaviorResult<CrewContext> {
    return {
      context,
      selectedNode: null
    };
  }
}
