class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value, nocount = false) {
    let newPair = new KeyValuePair(key, value);
    let hash = this.hashMod(key);
    if (!nocount) {
      this.count++;
    }

    if (this.capacity / this.count < 0.7) {
      this.resize();
    }

    if (this.data[hash] === undefined) {
      this.data[hash] = newPair;
      return;
    } else {
      let curr = this.data[hash];
      while (curr) {
        if (curr.key === key) {
          curr.value = value;
          return;
        } else {
          curr = curr.next;
        }
      }
    }

    newPair.next = this.data[hash];
    this.data[hash] = newPair;
  }

  read(key) {
    let hash = this.hashMod(key);
    let curr = this.data[hash];
    while (curr) {
      if (curr.key === key) {
        return curr.value;
      } else {
        curr = curr.next;
      }
    }
    return undefined;
  }

  resize() {
    let dataCopy = [...this.data];
    this.capacity *= 2;
    this.data = new Array(this.capacity);
    for (let i = 0; i < dataCopy.length; i++) {
      if (dataCopy[i] === undefined) {
        continue;
      }
      let el = dataCopy[i];
      while (el) {
        this.insert(el.key, el.value, true);
        el = el.next;
      }
    }
  }

  delete(key) {
    // Your code here
  }
}

let hashTable = new HashTable(2);

console.log("Reading and writing 50k items to hashtable:");

let start = Date.now();

for (let i = 0; i < 50000; i++) {
  hashTable.insert(`key${i}`, `value${i}`);
}
for (let i = 0; i < 50000; i++) {
  hashTable.read(`key${i}`);
}

let end = Date.now();
console.log(end - start, "ms");
// Reading and writing 50k items to hashtable:
// 850ms

module.exports = HashTable;
