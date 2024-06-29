import { Queue } from "../queue";

describe("Queue", () => {

  let queue : Queue<number>

  beforeEach(() => {
    queue = new Queue<number>();
  })

  it("Queue is Empty", () => {
    expect(queue.isEmpty).toBeTruthy();
  })

  it("Queue EnQueue Test", () => {
    queue.Enqueue(1);
    
    expect(queue.isEmpty).toBeFalsy();
    expect(queue.Peek()).toBe(1);
  })

  it("Queue Dequeue Test",() => {
    queue.Enqueue(1);
    queue.Enqueue(2);
    
    expect(queue.Dequeue()).toBe(1);
    expect(queue.Dequeue()).toBe(2);
    expect(queue.Dequeue()).toBe(null);
  })

  it("Queue Peek Test",() => {
    queue.Enqueue(3);

    expect(queue.Peek()).toBe(3);
  })
})