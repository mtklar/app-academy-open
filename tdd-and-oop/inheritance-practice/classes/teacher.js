const Person = require("./person");

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teacherArray) {
    let totalYears = 0;
    for (let i = 0; i < teacherArray.length; i++) {
      totalYears += teacherArray[i].yearsOfExperience;
    }
    return totalYears;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
