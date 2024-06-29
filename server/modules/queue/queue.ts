import { IQueueNode, QueueNode } from "./node"
import { deepCopy } from "../DeepCopy";

export class Queue<T> {
  protected front: QueueNode<T> | null
  protected rear: QueueNode<T> | null

  constructor() {
    this.front = null;
    this.rear = null;
  }

  get isEmpty() {
    return this.front === null;
  }

  Enqueue(data: T): void {
    if (this.front !== null && this.rear !== null) {
      const node = new QueueNode(data, null);
      this.rear.next = node;
      this.rear = node;
    }
    else {
      const node = new QueueNode(data, null);
      this.front = node;
      this.rear = node;
    }
  }

  Dequeue(): T | null {

    if (!this.front) return null;

    const node = this.front;

    if (this.front.next !== null) {
      this.front = this.front.next;
    }
    else {
      this.front = null
      this.rear = null;
    }

    node.next = null;
    return node.data;
  }

  Peek(): T | null {
    
    if(!this.front) return null;
  
    return deepCopy(this.front.data);
  }
}
