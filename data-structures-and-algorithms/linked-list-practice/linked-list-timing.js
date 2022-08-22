const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

singleLinkedList = new LinkedList();
doublyLinkedList = new DoublyLinkedList();

let start = Date.now();
for (let i = 0; i < 100000; i++) {
  singleLinkedList.addToHead(i);
}
let end = Date.now();
console.log(`Guess: O(1)`);
console.log(`Singly Linked List addToHead: ${end - start}ms`);

start = Date.now();
for (let i = 0; i < 100000; i++) {
  doublyLinkedList.addToHead(i);
}
end = Date.now();
console.log(`Guess: O(1)`);
console.log(`Doubly Linked List addToHead: ${end - start}ms`);

start = Date.now();
for (let i = 0; i < 100000; i++) {
  singleLinkedList.addToTail(i);
}
end = Date.now();
console.log(`Guess: O(n)`);
console.log(`Singly Linked List addToTail: ${end - start}ms`);

start = Date.now();
for (let i = 0; i < 100000; i++) {
  doublyLinkedList.addToTail(i);
}
end = Date.now();
console.log(`Guess: O(1)`);
console.log(`Doubly Linked List addToTail: ${end - start}ms`);
