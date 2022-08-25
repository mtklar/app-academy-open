// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;

    return this;
  }

  removeFromHead() {
    // Remove node at head
    if (!this.head) {
      return undefined;
    }

    if (this.head.next) {
      let oldNode = this.head;
      this.head = this.head.next;
      this.length--;
      return oldNode;
    } else if (this.head && !this.head.next) {
      this.head = null;
      this.length--;
      return this.head;
    }

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    if (!this.head) {
      return undefined;
    }

    if (this.head && !this.head.next) {
      this.head = null;
      this.length--;
      return this.head;
    }

    if (this.head) {
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      let oldNode = curr.next;
      curr.next = null;
      this.length--;
      return oldNode;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return value of head node
    if (!this.head) {
      return undefined;
    } else {
      return this.head.value;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    if (!this.head) return;

    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
    // Write your hypothesis on the time complexity of this method here
  }
}

linkedList = new SinglyLinkedList();
console.log(linkedList.head);
linkedList.addToTail("B");
console.log(linkedList.head);
console.log(linkedList.addToTail("A"));

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
