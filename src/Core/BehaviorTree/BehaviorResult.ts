import {BehaviorNode} from './BehaviorNode';

export interface  BehaviorResult<T> {
  selectedNode: BehaviorNode<T> | null;
  context: T;
}
