const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager, employees) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    let sum = 0;
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i] instanceof Manager) {
        sum += this.employees[i].salary;
        sum += this.employees[i]._totalSubSalary();
      } else {
        sum += this.employees[i].salary;
      }
    }
    return (this.salary + sum) * multiplier;
  }

  _totalSubSalary() {
    // resursively calculate the total salary of all employees under this manager and then other managers
    let sum = 0;
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i] instanceof Manager) {
        sum += this.employees[i].salary;
        sum += this.employees[i]._totalSubSalary();
      } else {
        sum += this.employees[i].salary;
      }
    }
    return sum;
  }
}

const splinter = new Manager("Splinter", 100000, "Sensei");
const leo = new Manager("Leonardo", 90000, "Ninja", splinter);
const raph = new Manager("Raphael", 90000, "Ninja", leo);
const mikey = new Employee("Michelangelo", 85000, "Grasshopper", raph);
const donnie = new Employee("Donatello", 85000, "Grasshopper", raph);

module.exports = Manager;
