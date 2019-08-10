import {BehaviorNode} from './BehaviorNode';
import {BehaviorResult} from './BehaviorResult';

export class BehaviorSequence<T> implements BehaviorNode<T> {
  constructor(children?: BehaviorNode<T>[]) {
    if (children) {
      for (const child of children) {
        this.addChild(child);
      }
    }
  }

  private readonly _children: BehaviorNode<T>[] = [];

  get children(): BehaviorNode<T>[] {
    return this._children;
  }

  public addChild(node: BehaviorNode<T>): void {
    if (node) {
      this._children.push(node);
    }
  }

  public evaluate(context: T): BehaviorResult<T> {
    let output: BehaviorResult<T> = null;

    for (const node of this.children) {
      output = node.evaluate(context);
      if (output && output.selectedNode) {
        return output;
      }
    }

    return {
      context,
      selectedNode: null
    };
  }
}

