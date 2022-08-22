class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    if (!this.head) {
      this.addToHead(val);
      return;
    }

    let newNode = new LinkedListNode(val);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

let linkedList = new LinkedList();
linkedList.addToHead(3);
linkedList.addToHead(2);
linkedList.addToTail(4);
linkedList.addToTail(5);
linkedList.print();

module.exports = LinkedList;
