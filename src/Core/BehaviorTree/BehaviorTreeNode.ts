import {BehaviorNode} from './BehaviorNode';

export class BehaviorTreeNode implements BehaviorNode {

  private readonly nodes: BehaviorNode[] = [];

  public addNode(node: BehaviorNode): void {
    if (node) {
      this.nodes.push(node);
    }
  }

  public evaluate(): BehaviorNode | null {
    let output: BehaviorNode = null;

    for (const node of this.nodes) {
      output = node.evaluate();
      if (output) {
        return output;
      }
    }

    return null;
  }
}
