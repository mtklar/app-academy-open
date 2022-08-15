class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let currentItem = this.currentRoom.getItemByName(itemName);
    if (currentItem) {
      this.items.push(currentItem);
      let index = this.currentRoom.items.indexOf(currentItem);
      this.currentRoom.items.splice(index, 1);
    } else {
      return false;
    }
  }

  dropItem(itemName) {
    let currentItem = this.getItemByName(itemName);
    if (currentItem) {
      this.currentRoom.items.push(currentItem);
      let index = this.items.indexOf(currentItem);
      this.items.splice(index, 1);
    } else {
      return false;
    }
  }

  eatItem(itemName) {
    let currentItem = this.getItemByName(itemName);

    if (currentItem.constructor.name === "Food") {
      let index = this.items.indexOf(currentItem);
      this.items.splice(index, 1);
      return true;
    }

    return false;
  }

  getItemByName(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (name === this.items[i].name) {
        return this.items[i];
      }
    }
    return false;
  }
}

module.exports = {
  Player,
};
