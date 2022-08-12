// Your code here

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      console.log("introducePeople only takes an array as an argument.");
      return;
    }

    for (let i = 0; i < people.length; i++) {
      let person = people[i];
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances.");
        return;
      }
    }

    for (let i = 0; i < people.length; i++) {
      let person = people[i];
      person.introduce();
    }
  }
}

const person2 = new Person("jeff", "granoff", 30);
const person1 = new Person("john", "jonny", 20);
const person3 = new Person("jane", "jane", 30);
const person4 = new Person("joe", "joe", 40);
const person5 = new Person("jill", "jill", 50);
Person.introducePeople([person1, person2, person3, person4, person5]);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
