const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    let newNode = new SinglyLinkedNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this.length;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
    // Write your hypothesis on the time complexity of this method here
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.value;
    }

    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead.value;
    // Write your hypothesis on the time complexity of this method here
  }
}

queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(queue.head.value);
console.log(queue.tail.value);

module.exports = {
  Queue,
  SinglyLinkedNode,
};
