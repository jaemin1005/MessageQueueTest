export interface IQueueNode<T>{
  data : T
  next : IQueueNode<T> | null;
}

export class QueueNode<T> implements IQueueNode<T>{
  data 
  next
  constructor(data : T, next : QueueNode<T> | null ){
    this.data = data;
    this.next = next;
  }
}
