export interface IQueueNode<T>{
  data : T
  next : IQueueNode<T>
}

export class QueueNode<T> implements IQueueNode<T>{
  data 
  next
  constructor(data : T, next : QueueNode<T>){
    this.data = data;
    this.next = next;
  }
}
