class Employee {
  constructor(name, salary, title, manager) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager ? manager : null;

    if (this.manager) {
      this.manager.addEmployee(this);
    }
  }

  calculateBonus(multiplier) {
    return this.salary * multiplier;
  }
}

module.exports = Employee;
