// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    let newNode = new DoublyLinkedNode(val);
    if (this.length > 0) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    // Remove node at head
    if (this.length === 0) {
      return undefined;
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
    this.head.prev = null;
    this.length--;
    return oldHead.value;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      let removedNode = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.value;
    }

    let oldTail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return oldTail.value;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return value of head node
    if (this.length === 0) {
      return undefined;
    }

    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtTail() {
    // Return value of tail node
    if (this.length === 0) {
      return undefined;
    }

    return this.tail.value;
    // Write your hypothesis on the time complexity of this method here
  }
}

list = new DoublyLinkedList();

list.addToHead("A");
list.addToHead("B");
list.addToHead("C");

const head = list.head;
const tail = list.tail;
const middle = list.head.next;
console.log(list);
console.log(head.next.value);
console.log(tail.prev.value);

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
