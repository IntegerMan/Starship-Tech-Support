import {BehaviorNode} from './BehaviorNode';
import {BehaviorResult} from './BehaviorResult';

export class BehaviorTree<T> implements BehaviorNode<T> {

  public get child(): BehaviorNode<T> | null {
    return this._child;
  }

  public set child(value: BehaviorNode<T> | null) {
    this._child = value;
  }

  private _child: BehaviorNode<T> | null = null;

  public evaluate(context: T): BehaviorResult<T> {
    return this._child
      ? this._child.evaluate(context)
      : { context, selectedNode: null };
  }
}
