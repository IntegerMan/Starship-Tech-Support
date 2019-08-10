import {BehaviorResult} from './BehaviorResult';

export interface BehaviorNode<T> {
  evaluate(context: T): BehaviorResult<T>;
}
