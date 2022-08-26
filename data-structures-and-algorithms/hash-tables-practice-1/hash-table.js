const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.data = new Array(numBuckets);
    this.capacity = numBuckets;
  }

  hash(key) {
    let shaKey = sha256(key).slice(0, 8).split("").reverse();
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      let el = shaKey[i];
      switch (el) {
        case "0":
          el = 0;
          break;
        case "1":
          el = 1;
          break;
        case "2":
          el = 2;
          break;
        case "3":
          el = 3;
          break;
        case "4":
          el = 4;
          break;
        case "5":
          el = 5;
          break;
        case "6":
          el = 6;
          break;
        case "7":
          el = 7;
          break;
        case "8":
          el = 8;
          break;
        case "9":
          el = 9;
          break;
        case "a":
          el = 10;
          break;
        case "b":
          el = 11;
          break;
        case "c":
          el = 12;
          break;
        case "d":
          el = 13;
          break;
        case "e":
          el = 14;
          break;
        case "f":
          el = 15;
          break;
      }
      sum += el * 16 ** i;
    }
    return sum;
  }

  hashMod(key) {
    let hash = this.hash(key);
    return hash % this.capacity;
  }

  insertNoCollisions(key, value) {
    let newPair = new KeyValuePair(key, value);
    let hash = this.hashMod(key);
    if (this.data[hash] === undefined) {
      this.data[hash] = newPair;
    } else {
      throw new Error("hash collision or same key/value pair already exists!");
    }
  }

  insertWithHashCollisions(key, value) {
    let newPair = new KeyValuePair(key, value);
    let hash = this.hashMod(key);
    if (this.data[hash] === undefined) {
      this.data[hash] = newPair;
    }
    // else add to head of linked list
    else {
      let curr = this.data[hash];
      newPair.next = curr;
      this.data[hash] = newPair;
    }
  }

  insert(key, value) {
    let newPair = new KeyValuePair(key, value);
    let hash = this.hashMod(key);

    if (this.data[hash] === undefined) {
      this.data[hash] = newPair;
    } else {
      let curr = this.data[hash];
      while (curr) {
        if (curr.key === key) {
          curr.value = value;
          return;
        }
        curr = curr.next;
      }
      newPair.next = this.data[hash];
      this.data[hash] = newPair;
    }
  }
}

let hashTable = new HashTable(2);
console.log(hashTable.hash(""));
hashTable.insertWithHashCollisions("key-1", "val-1");
hashTable.insertWithHashCollisions("key-2", "val-2");
hashTable.insertWithHashCollisions("key-3", "val-3");
hashTable.insertWithHashCollisions("key-4", "val-4");
hashTable.insertWithHashCollisions("key-1d", "val-5");
console.log(hashTable.data);

module.exports = HashTable;
