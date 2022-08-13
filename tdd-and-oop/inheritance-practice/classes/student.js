const Person = require("./person");

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(a, b) {
    if (a.GPA === b.GPA) {
      return `Both students have the same GPA.`;
    } else if (a.GPA > b.GPA) {
      return `${a.firstName} ${a.lastName} has the higher GPA.`;
    } else {
      return `${b.firstName} ${b.lastName} has the higher GPA.`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
